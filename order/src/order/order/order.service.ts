import { Injectable } from '@nestjs/common';
import { Order } from '../order.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
    ) { }

    async  findAll(): Promise<Order[]> {
        return await this.orderRepository.find();
    }

    async findOne(id): Promise<Order> {
        return await this.orderRepository.findOne(id);
    }

    async  create(order: Order): Promise<Order> {
        return await this.orderRepository.save(order);
    }

    async update(id: string, order: Order): Promise<UpdateResult> {
        return await this.orderRepository.update(id, order);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.orderRepository.delete(id);
    }
}
