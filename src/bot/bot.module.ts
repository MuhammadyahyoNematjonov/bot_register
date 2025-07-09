import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { Botup } from './bot.update';

@Module({
  imports:[
    TelegrafModule.forRoot({
      token:"8012707177:AAHl6_WQTuiM9ZNAYmgcGoSicWXIlC7iQ8Y"
    })
  ],
  providers: [Botup]
})
export class BotModule {}
