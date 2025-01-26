import type { OrtografiaRespuesta } from "../../../Interfaces";

export const OrtografiaCasoUso = async(indicaciones: string) => {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_GPT_API}/comprobar-ortografia`,{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            indicaciones: indicaciones
        })
    })
    if (!respuesta.ok) {
        throw new Error("No se pudo realizar la conexion");
    }
    const  datos = await respuesta.json() as OrtografiaRespuesta;
    return{
        ok: true,
        ...datos
    }
  } catch (error) {
    return {
        ok: false,
        puntuacion: 0,
        errores: [],
        mensaje: "No se pudo realizar la correccion"
    }
  }
}
