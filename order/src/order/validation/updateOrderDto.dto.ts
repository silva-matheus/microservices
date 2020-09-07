import { IsString, IsEmail, IsNumber, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class UpdateOrderDto {
    @IsOptional()
    @IsString()
    client_name: string;

    @IsOptional()
    @IsString()
    client_address: string;

    @IsOptional()
    @IsString()
    client_phone: string;

    @IsEmail()
    @IsString()
    @IsOptional()
    client_email: string;

    @IsOptional()
    @IsString()
    product_name: string;

    @IsOptional()
    @IsNumber()
    product_quantity: number;

    @IsOptional()
    @IsNumber()
    product_value: number;

    @IsOptional()
    @IsBoolean()
    active: boolean;
}