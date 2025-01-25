import OpenAI from "openai";

interface Opciones {
    indicaciones: string
  }

export const ProscontrasCasoUso = async (openAi: OpenAI,opciones: Opciones) => {
    const { indicaciones } = opciones;

    const completion = await openAi.chat.completions.create({
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
    const json = completion.choices[0].message;
  
    return json;
}
