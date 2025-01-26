import { IsString } from "class-validator";

export class TraductorDto {
    @IsString()
    readonly indicaciones: string;
    @IsString()
    readonly lenguaje: string;
}