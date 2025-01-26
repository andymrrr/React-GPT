import { traductorRespuesta } from "../../../Interfaces";

export const TraductorCasoUso = async(indicaciones: string,lenguaje: string) => {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_GPT_API}/Traductor`,{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            indicaciones: indicaciones,
            lenguaje: lenguaje

        })
    })
    if (!respuesta.ok) {
        throw new Error("No se pudo realizar la conexion");
    }
    const {mensaje} = await respuesta.json() as traductorRespuesta;
    return {
      ok: true,
      mensaje: mensaje
    }
   
  } catch (error) {
    return {
      ok: false,
      mensaje:"Hubo un error enn la solicitud"
    }
  }
}
