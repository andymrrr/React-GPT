
export async function * ProsContrasGeneradoTransmision  (indicaciones: string, senar: AbortSignal) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_GPT_API}/Pros-contras-transmision`,{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            indicaciones: indicaciones
        }),
        signal: senar
    })
    if (!respuesta.ok) {
        throw new Error("No se pudo realizar la comparacion");
    }
    const lectura = respuesta.body?.getReader();
   
     if (!lectura) {
       return null;
     }

     const decodificador = new TextDecoder();

     let texto = '';

     while (true) {
        const {value,done} = await lectura.read();
        if (done) {
         break;
        }
        const piezaDecodificada = decodificador.decode(value,{stream: true});
        texto +=piezaDecodificada;
       yield texto;
       
     }
    
  } catch (error) {
    return null
  }
}
