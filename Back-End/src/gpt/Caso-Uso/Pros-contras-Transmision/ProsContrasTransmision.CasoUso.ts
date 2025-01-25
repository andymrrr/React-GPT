import OpenAI from "openai";

interface Opciones {
    indicaciones: string
  }

export const ProsContrasTransmisionCasoUso = async (openAi: OpenAI,opciones: Opciones) => {
    const { indicaciones } = opciones;

    return await openAi.chat.completions.create({
      stream:true,
      model: 'gpt-4o',
      temperature:0.8,
      max_tokens:330,
     
      messages: [
        { 
          role: 'system', 
          content: `
                    Se te dará una pregunta y tu tarea es dar una respuesta con pros y contras,
                    la respuesta debe de ser en formato markdown,
                    los pros y contras deben de estar en una lista,
                   ` 
        },
        {
          role:"user",
          content: indicaciones
        }
      ],
    });
   
}
