import OpenAI from "openai";

import { Injectable } from '@nestjs/common';
import { OrtografiaComprobarCasoUso, ProscontrasCasoUso, ProsContrasTransmisionCasoUso, TraductorCasoUso } from './Caso-Uso';
import { OrtografiaDto, ProsContrasDto, TraductorDto } from './Dtos';




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
    async traductor({indicaciones,lenguaje}: TraductorDto)
    {
        return await TraductorCasoUso(this.openai,{indicaciones,lenguaje})
    }
}

