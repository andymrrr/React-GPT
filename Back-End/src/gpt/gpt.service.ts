import OpenAI from "openai";

import { Injectable } from '@nestjs/common';
import { OrtografiaComprobarCasoUso } from './Caso-Uso';
import { OrtografiaDto } from './Dtos';

@Injectable()
export class GptService {

    private openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });
    async comprobacionOrtografía(ortografiaDto: OrtografiaDto){
        return await OrtografiaComprobarCasoUso(this.openai,{
            indicaciones: ortografiaDto.indicaciones
        });
    }
}
