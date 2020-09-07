import { IsString, IsNotEmpty } from 'class-validator';

export class LogDto {

    @IsNotEmpty()
    @IsString()
    route: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsString()
    entity: string;
}
