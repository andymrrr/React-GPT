import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrtografiaDto } from './Dtos';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('comprobar-ortografia')
  comprobarOrtografia( @Body() ortografiaDto: OrtografiaDto)
  {

    return this.gptService.comprobacionOrtografía(ortografiaDto);
  }
}
