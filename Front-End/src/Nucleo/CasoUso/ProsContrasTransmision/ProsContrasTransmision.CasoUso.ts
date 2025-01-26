
export const ProsContrasTransmision = async(indicaciones: string) => {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_GPT_API}/Pros-contras-transmision`,{
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
    const lectura = respuesta.body?.getReader();
    return lectura
  
  } catch (error) {
    return null
  }
}
