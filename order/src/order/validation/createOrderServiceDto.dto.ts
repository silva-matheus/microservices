import { IsNotEmpty, IsOptional, IsBoolean, IsObject, IsArray, ValidateNested } from 'class-validator';
import { ProductDto } from './createOrderProductServiceDto.dto';
import { ClientDto } from './createOrderClientServiceDto.dto';
import { Type } from 'class-transformer';

export class CreateOrderServiceDto {

    @IsNotEmpty()
    @IsObject()
    @Type(() => ClientDto)
    client: ClientDto;

    @IsNotEmpty()
    @IsArray()
    @ValidateNested()
    @Type(() => ProductDto)
    products: ProductDto[];

    @IsOptional()
    @IsBoolean()
    active: boolean;
}
