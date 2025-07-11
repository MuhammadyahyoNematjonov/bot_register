import { Module } from '@nestjs/common';
import { BotModule } from './bot/bot.module';
import { Botup } from './bot/bot.update';
import { PrismaModule } from './databases/prisma.module';

@Module({
  imports: [BotModule, PrismaModule],
})
export class AppModule {}
