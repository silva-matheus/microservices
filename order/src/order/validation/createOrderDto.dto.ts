import { IsString, IsEmail, IsNumber, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateOrderDto {

    @IsNotEmpty()
    @IsString()
    client_name: string;

    @IsNotEmpty()
    @IsString()
    client_address: string;

    @IsNotEmpty()
    @IsString()
    client_phone: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    client_email: string;

    @IsNotEmpty()
    @IsString()
    product_name: string;

    @IsNotEmpty()
    @IsNumber()
    product_quantity: number;

    @IsNotEmpty()
    @IsNumber()
    product_value: number;

    @IsOptional()
    @IsBoolean()
    active: boolean;
}
