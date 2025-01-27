import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrtografiaDto, TextoAudioDto, TraductorDto } from './Dtos';
import { ProsContrasDto } from './Dtos/Pros-contras/Pros-contras.Dto';
import { Response } from 'express';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('comprobar-ortografia')
  comprobarOrtografia( @Body() ortografiaDto: OrtografiaDto)
  {

    return this.gptService.comprobacionOrtografía(ortografiaDto);
  }
  @Post('Pros-contras')
  ProsContras ( @Body() prosContraDto: ProsContrasDto)
  {
    console.log( `entre ${prosContraDto.indicaciones}`)
    return this.gptService.prosContras(prosContraDto)
  }
  @Post('Pros-contras-transmision')
  async ProsContrasTransmision (
     @Body() prosContraDto: ProsContrasDto,
     @Res() respuesta: Response
    )
  {
   
    const transmision = await this.gptService.prosContrasTransmision(prosContraDto)

    respuesta.setHeader("Content-Type","application/json");
    respuesta.status(HttpStatus.OK);
    for await (const pedazo of transmision )
    {
      const pieza = pedazo.choices[0].delta.content || '';
      respuesta.write(pieza)

    }

    respuesta.end();
  }
  @Post('Traductor')
  Traductor ( @Body() traductorDto: TraductorDto)
  {
    return this.gptService.traductor(traductorDto)
  }

  @Post('Texto-Audio')
  TextoAudio ( @Body() textoAudioDto: TextoAudioDto)
  {
    return this.gptService.textoAudio(textoAudioDto)
  }
}
