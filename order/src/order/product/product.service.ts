import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderProduct } from '../order-product.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(OrderProduct)
        private orderRepository: Repository<OrderProduct>,
    ) { }

    async  findAll(): Promise<OrderProduct[]> {
        return await this.orderRepository.find();
    }

    async findOne(id): Promise<OrderProduct> {
        return await this.orderRepository.findOne(id);
    }

    async  create(orderProduct: OrderProduct): Promise<OrderProduct> {
        return await this.orderRepository.save(orderProduct);
    }

    async update(id: string, orderProduct: OrderProduct): Promise<UpdateResult> {
        return await this.orderRepository.update(id, orderProduct);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.orderRepository.delete(id);
    }
}
