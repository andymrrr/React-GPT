import { IsInt, IsOptional, IsString } from "class-validator";

export class OrtografiaDto {
    @IsString()
    readonly indicaciones: string;

    @IsOptional()
    @IsInt()
    readonly maxToken?: number;
}
