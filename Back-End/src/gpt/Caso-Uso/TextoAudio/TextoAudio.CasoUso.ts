import OpenAI from 'openai';
interface Opciones {
  indicaciones: string;
  voz: string;
}
export const TextoAudioCasoUso = async (
  openAi: OpenAI,
  {indicaciones,voz}: Opciones,
) => {
 

  const respuestaOpenAI = await openAi.chat.completions.create({
    model: 'gpt-4o',
    temperature:0.2,
    messages: [
      { 
        role: 'system', 
        content: `Traduce el siguiente texto al idioma ${voz}:${ indicaciones }` 
      }
    ],
  });
  

  return {
    mensaje: respuestaOpenAI.choices[0].message.content
  }
};
