import { useState } from "react"
import {  CajaChatTexto, GptMensaje, GptOrtografiaMensaje, Loading, MiMensaje } from "../../Componentes"
import { OrtografiaCasoUso } from "../../../Nucleo/CasoUso";

interface Mensaje {
  texto:string;
  esGpt: boolean,
  informacion?: {
    puntuacion: number;
    errores:    string[];
    mensaje:    string;
  }
}

export const OrtografiaPagina = () => {
  const [estaCargando, setEstaCargando] = useState<boolean>(false)
  const [mesajes, setmesaje] = useState<Mensaje[]>([])

  const handleEnviar= async(texto: string) =>  {
    setEstaCargando(true);
    setmesaje((anterior) => [...anterior,{texto: texto, esGpt: false}]);

  const {errores,mensaje,ok,puntuacion} = await OrtografiaCasoUso(texto);
  if (!ok) {
    setmesaje((anterior) => [...anterior,{texto: "No se pudo Realizar la Correccion", esGpt: true}]);
  }
  else{
    setmesaje((anterior) => [...anterior,
      {
      texto: mensaje, 
      esGpt: true,
      informacion:{
        errores: errores,
        mensaje: mensaje,
        puntuacion: puntuacion
      }
    
    }]);
  }
  

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
                <GptOrtografiaMensaje key={index} 
                errores={msj.informacion?.errores!} 
                mensaje={msj.informacion?.mensaje!} 
                puntuacion={msj.informacion?.puntuacion!}
                />
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
        <CajaChatTexto
        onEnviarMensaje={handleEnviar}
        desabilitarCorreccion
        placeHolder="Escribe lo que deseas"
       /> 
       
    </div>
  )
}
