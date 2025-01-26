
import { useState } from "react";
import { GptMensaje, MiMensaje, Loading, CajaChatTexto } from "../../Componentes";
import { ProsContrasCasoUso } from "../../../Nucleo/CasoUso/ProsContras/ProsContras.CasoUso";


interface Mensaje {
  texto: string;
  esGpt: boolean;
}

export const ProsContrasPagina = () => {
  const [estaCargando, setEstaCargando] = useState<boolean>(false);
  const [mesajes, setmesaje] = useState<Mensaje[]>([]);

  const handleEnviar = async (texto: string) => {
    setEstaCargando(true);
    setmesaje((anterior) => [...anterior, { texto: texto, esGpt: false }]);

   
     const {ok, content} = await ProsContrasCasoUso(texto);
      if (!ok) {
        setmesaje((anterior) => [...anterior,{texto: "No se pudo Realizar la Comparcion", esGpt: true}]);
      }
      else{
        setmesaje((anterior) => [...anterior,
          {
          texto: content, 
          esGpt: true,
          
        
        }]);
      }
      
    setEstaCargando(false);
  };
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenida*/}
          <GptMensaje texto="Que deseas Comparar" />
          {mesajes.map((msj, index) =>
            msj.esGpt ? (
              <GptMensaje key={index} texto={msj.texto} />
            ) : (
              <MiMensaje key={index} texto={msj.texto} />
            )
          )}

          {estaCargando && (
            <div className=" col-start-1 col-end-12 fade-in">
              {/* Loading*/}
              <Loading className="fade-in" />
            </div>
          )}
        </div>
      </div>
      {/* Caja Texto*/}
      <CajaChatTexto
        onEnviarMensaje={handleEnviar}
        desabilitarCorreccion
        placeHolder="Escribe lo que deseas"
      />
    </div>
  );
};
