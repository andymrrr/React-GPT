import {IsOptional, IsString } from "class-validator";

export class TextoAudioDto {
    @IsString()
    readonly indicaciones: string;

    @IsOptional()
    @IsString()
    readonly voz?: string;
}
