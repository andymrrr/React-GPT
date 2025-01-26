import OpenAI from 'openai';
interface Opciones {
  indicaciones: string;
  lenguaje: string;
}
export const TraductorCasoUso = async (
  openAi: OpenAI,
  {indicaciones,lenguaje}: Opciones,
) => {
 

  const respuestaOpenAI = await openAi.chat.completions.create({
    model: 'gpt-4o',
    temperature:0.2,
    messages: [
      { 
        role: 'system', 
        content: `Traduce el siguiente texto al idioma ${lenguaje}:${ indicaciones }` 
      }
    ],
  });
  

  return {
    mensaje: respuestaOpenAI.choices[0].message.content
  }
};
