import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class ProductDto {

    @IsNotEmpty()
    @IsString()
    _id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    value: number;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}
