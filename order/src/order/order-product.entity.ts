import {Entity, ObjectID, ObjectIdColumn, Column, Timestamp} from "typeorm";

@Entity()
export class OrderProduct {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column({nullable: true})
    __v: number;
}
