import { Injectable } from '@nestjs/common';
import { OrtografiaComprobarCasoUso } from './Caso-Uso';
import { OrtografiaDto } from './Dtos';

@Injectable()
export class GptService {

    async comprobacionOrtografía(ortografiaDto: OrtografiaDto){
        return await OrtografiaComprobarCasoUso({
            indicaciones: ortografiaDto.indicaciones
        });
    }
}
