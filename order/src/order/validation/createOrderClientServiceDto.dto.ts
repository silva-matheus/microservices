import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class ClientDto {

    @IsNotEmpty()
    @IsString()
    _id: string;

}
