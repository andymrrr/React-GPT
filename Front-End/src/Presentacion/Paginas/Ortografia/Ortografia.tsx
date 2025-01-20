import { useState } from "react"
import { CajaChatTexto, CajaChatTextoArchivo, CajaChatTextoSelect, GptMensaje, Loading, MiMensaje } from "../../Componentes"

interface Mensaje {
  texto:string;
  esGpt: boolean
}

export const OrtografiaPagina = () => {
  const [estaCargando, setEstaCargando] = useState<boolean>(false)
  const [mesajes, setmesaje] = useState<Mensaje[]>([])

  const handleEnviar= async(texto: string) =>  {
    setEstaCargando(true);
    setmesaje((anterior) => [...anterior,{texto: texto, esGpt: false}]);

    //TODO Caso Uso

    setEstaCargando(false)

  }
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenida*/}
          <GptMensaje texto="Hola, puedes escribir  y te ayudo con las correcciones"/>
          {
            mesajes.map((msj,index) => (
              msj.esGpt ?
              (
                <GptMensaje key={index}  texto="Esto es OpenAI"/>
              )
              :
              (
                <MiMensaje key={index} texto={msj.texto}/>
              )
            ))
          }
        

         {
          estaCargando && (
            <div className=" col-start-1 col-end-12 fade-in">
            {/* Loading*/}
          <Loading className="fade-in"/>
          </div>
          )
         }
          
          
        </div>
      </div>
       {/* Caja Texto*/}
       {/* <CajaChatTexto
        onEnviarMensaje={handleEnviar}
        desabilitarCorreccion
        placeHolder="Escribe lo que deseas"
       /> */}
       {/* <CajaChatTextoArchivo
        onEnviarMensaje={handleEnviar}
        desabilitarCorreccion
        placeHolder="Escribe lo que deseas"
       /> */}
        <CajaChatTextoSelect
        onEnviarMensaje={handleEnviar}
        desabilitarCorreccion
        placeHolder="Escribe lo que deseas"
        opciones={[{id:"1", texto:"Hola"},{id:"2", texto:"Mundo"}]}
       />
    </div>
  )
}
