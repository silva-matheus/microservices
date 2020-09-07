import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from 'config/dev.env';
import { LogModule } from './log/log.module';

@Module({
  imports: [OrderModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: environment.HOST,
      port: environment.PORT,
      username: environment.USERNAME,
      password: environment.PASSWORD,
      database: environment.DATABASE,
      authSource: environment.AUTH_SOURCE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
   }),
    LogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
