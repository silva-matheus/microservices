import { Controller, Get, Req, Param, Body, Post, Put, HttpException, HttpStatus, Delete, Logger, OnModuleInit } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from '../order.entity';
import * as sanitize from 'mongo-sanitize';
import { CreateOrderDto } from '../validation/createOrderDto.dto';
import { UpdateOrderDto } from '../validation/updateOrderDto.dto';
import { LogService } from 'src/log/log/log.service';

@Controller('order')
export class OrderController {

    constructor(private orderService: OrderService, private logService: LogService) { }
    @Get()
    async index(): Promise<Order[]> {
        this.logService.create({
            route: 'order',
            type: 'GET',
            entity: 'Order',
        });
        return await this.orderService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Order> {
        this.logService.create({
            route: `order/${id}`,
            type: 'GET',
            entity: 'Order',
        });
        return await this.orderService.findOne(sanitize(id));
    }

    @Post('create')
    async create(@Body() orderData: CreateOrderDto): Promise<Order> {
        const cleanOrder = sanitize(orderData);
        this.logService.create({
            route: `order/create`,
            type: 'POST',
            entity: 'Order',
        });
        return await this.orderService.create(cleanOrder);
    }

    @Put(':id/update')
    async update(@Param('id') id: string, @Body() orderData: UpdateOrderDto): Promise<any> {
        const verifyOrder = await this.orderService.findOne(sanitize(id));

        if (verifyOrder) {
            const cleanOrder = sanitize(orderData);
            this.logService.create({
                route: `order/${id}/update`,
                type: 'PUT',
                entity: 'Order',
            });
            return await this.orderService.update(sanitize(id), cleanOrder);
        }

        throw new HttpException('order_not_found', HttpStatus.NOT_FOUND);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id: string): Promise<any> {
        const verifyOrder = await this.orderService.findOne(sanitize(id));

        if (verifyOrder) {
            this.logService.create({
                route: `order/${id}/delete`,
                type: 'DELETE',
                entity: 'Order',
            });
            return await this.orderService.delete(sanitize(id));
        }

        throw new HttpException('order_not_found', HttpStatus.NOT_FOUND);
    }
}
