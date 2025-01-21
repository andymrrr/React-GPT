import OpenAI from 'openai';
interface Opciones {
  indicaciones: string;
}
export const OrtografiaComprobarCasoUso = async (
  openAi: OpenAI,
  opciones: Opciones,
) => {
  const { indicaciones } = opciones;

  const completion = await openAi.chat.completions.create({
    model: 'gpt-4o',
    temperature:0.3,
    max_tokens:150,
    response_format:{
      type:'json_object'
    },
    messages: [
      { 
        role: 'system', 
        content: `Te seran proveido texto en españo con poible errore ortoografico y gramaticales.
                  Las palabras usadas debe de existir en el diccionario de la real academia. 
                  Debes de responder en formato JSON, 
                  tu tarea es corregirlos y retornar informacion soluiones,
                  tambien debes de dar un porcentaje de acierto por el usuario,
                  
                  Si no hay errores, debes de retornar un mensaje de felicitaciones.
                  
                  Ejemplo de Salida:
                  {
                    puntuacion: number,
                    errores: string[],//[error -> solucion]
                    mensaje: string // usa emoji y texto para felicitar al usuario
                  }
                  ` 
      },
      {
        role:"user",
        content: indicaciones
      }
    ],
  });
  const json = JSON.parse(completion.choices[0].message.content!);

  return json;
};
