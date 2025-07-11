import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { Botup } from './bot.update';
import { Prisma } from '@prisma/client';
import { PrismaModule } from 'src/databases/prisma.module';

@Module({
  imports:[
    TelegrafModule.forRoot({
      token:"8012707177:AAHl6_WQTuiM9ZNAYmgcGoSicWXIlC7iQ8Y"
    })
  ,PrismaModule],
  providers: [Botup]
})
export class BotModule {}
