import OpenAI from "openai";

import { Injectable } from '@nestjs/common';
import { OrtografiaComprobarCasoUso, ProscontrasCasoUso, ProsContrasTransmisionCasoUso } from './Caso-Uso';
import { OrtografiaDto } from './Dtos';
import { ProsContrasDto } from "./Dtos/Pros-contras/Pros-contras.Dto";


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

    async prosContras(prosContrasDto: ProsContrasDto)
    {
        return await ProscontrasCasoUso(this.openai,{
            indicaciones: prosContrasDto.indicaciones
        })
    }

    async prosContrasTransmision(prosContrasDto: ProsContrasDto)
    {
        return await ProsContrasTransmisionCasoUso(this.openai,{
            indicaciones: prosContrasDto.indicaciones
        })
    }
}

