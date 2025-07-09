import { Module } from '@nestjs/common';
import { BotModule } from './bot/bot.module';
import { Botup } from './bot/bot.update';

@Module({
  imports: [BotModule],
})
export class AppModule {}
