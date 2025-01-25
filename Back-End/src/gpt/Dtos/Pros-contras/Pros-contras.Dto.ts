import { IsString } from "class-validator";

export class ProsContrasDto {
    @IsString()
    readonly indicaciones: string;
}