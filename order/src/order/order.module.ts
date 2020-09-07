import { Module } from '@nestjs/common';
import { OrderService } from './order/order.service';
import { OrderController } from './order/order.controller';
import { Order } from './order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), LogModule],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
