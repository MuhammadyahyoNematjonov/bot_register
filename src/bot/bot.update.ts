import { on } from "events";
import { Ctx, On, Start, Update } from "nestjs-telegraf";
import { UserState } from "src/common/user.state";
import { PrismaService } from "src/databases/prisma.service";
import { Context } from "telegraf";


@Update()
export class Botup {
  constructor(private prisma:PrismaService){}
  @Start()
  async start(@Ctx() ctx: Context) {

    UserState.set(ctx.from!.id, { step: "ism", data: {} })
    ctx.reply("ism kirting")

  }

  @On('text')
  async onTexts(@Ctx() ctx: Context) {
    const states = UserState.get(ctx.from!.id)


    if (!states) {
      ctx.reply("iltmos /start bosing")
    }


    if ("text" in ctx.message!) {
      const text = ctx.message.text

      switch (states?.step) {
        case 'ism':
          states.data.ism = text
          states.step = "Familya"
          ctx.reply("Familyagizni kirting >:")
          break
        case 'Familya':
          states.data.Familya = text
          states.step = 'yosh'
          ctx.reply('Yoshgingni kirting >:')
          break
        case 'yosh':
          const age = parseInt(text)
          if(!age && isNaN(age)){
            return ctx.reply('son kirit ')
          }
          states.data.yosh = age
          states.step = "nomer"

          ctx.reply("raqam kirit",{
            reply_markup:{
              keyboard:[
                [
                  {
                    text:"raqam yuborish",
                    request_contact:true
                  }
                ]
              ],
              resize_keyboard:true,
              one_time_keyboard:true
            }
          })
      }
    }

  }

  @On("contact")
  async sTexts(@Ctx() ctx: Context){
    const states = UserState.get(ctx.from!.id)
    if('contact' in  ctx.message!){
      let nomer =ctx.message.contact.phone_number
      let {ism,Familya,yosh} = states!.data
      await this.prisma.user.create({
            data:{
                firstname:ism!,
                lastname:Familya!,
                age:yosh!,
                contact:nomer,
                telegramId:ctx.from!.id
            }
        })
    }

    ctx.reply("✅ Maʼlumot saqlandi")
    }    
  }





