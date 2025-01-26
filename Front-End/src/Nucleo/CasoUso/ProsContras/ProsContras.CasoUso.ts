import type { ProsContrasRespuesta } from "../../../Interfaces";

export const ProsContrasCasoUso = async(indicaciones: string) => {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_GPT_API}/Pros-contras`,{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            indicaciones: indicaciones
        })
    })
    if (!respuesta.ok) {
        throw new Error("No se pudo realizar la comparacion");
    }
    const  datos = await respuesta.json() as ProsContrasRespuesta;
    return{
        ok: true,
        ...datos
    }
  } catch (error) {
    return {
        ok: false,
        content: "No se pudo realizar la comparacion"
    }
  }
}
