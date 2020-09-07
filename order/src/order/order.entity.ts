import {Entity, ObjectID, ObjectIdColumn, Column, Timestamp} from "typeorm";
import { ProductDto } from "./validation/createOrderProductServiceDto.dto";

@Entity()
export class Order {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    client_name: string;

    @Column()
    client_address: string;

    @Column()
    client_phone: string;

    @Column()
    client_email: string;

    @Column()
    order_product: ProductDto[];

    @Column('timestamp with time zone', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    date: Timestamp;

    @Column({default: true})
    active: boolean;

    @Column({nullable: true})
    __v: number;
}
