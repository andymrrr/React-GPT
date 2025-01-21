interface Opciones {
  indicaciones: string;
}
export const OrtografiaComprobarCasoUso = async(opciones: Opciones) => {
  const {indicaciones} = opciones;
  
  return {
    indicaciones: indicaciones,
    apikey: process.env.OPENAI_API_KEY
  }
   
}
