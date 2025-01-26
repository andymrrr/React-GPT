import { useRef, useState } from "react";
import { GptMensaje, MiMensaje, Loading, CajaChatTexto } from "../../Componentes";
import { ProsContrasGeneradoTransmision } from "../../../Nucleo/CasoUso";

interface Mensaje {
  texto: string;
  esGpt: boolean;
}

export const PropsContrasStremsPagina = () => {
  const abortar = useRef(new AbortController());
  const estaCorriendo = useRef(false);
  const [estaCargando, setEstaCargando] = useState<boolean>(false);
  const [mesajes, setMensaje] = useState<Mensaje[]>([]);

  const handleEnviar = async (texto: string) => {
    if (estaCorriendo.current) {
      abortar.current.abort();  
      abortar.current = new AbortController()
    }
    
    setEstaCargando(true);
    estaCorriendo.current = true;
    setMensaje((anterior) => [...anterior, { texto: texto, esGpt: false }]);

    const transmision = await ProsContrasGeneradoTransmision(texto, abortar.current.signal!);
    setEstaCargando(false);
    setMensaje((anterior) => [...anterior, { texto: '', esGpt: true }]);
    
    for await (const text of transmision) {
      setMensaje((msj) => {
        const mensajeNuevo = [...msj];
        mensajeNuevo[mensajeNuevo.length - 1 ].texto = text
        return mensajeNuevo;

      })
    }
    estaCorriendo.current = false;
    

  };
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenida*/}
          <GptMensaje texto="Que deseas Comparar hoy?" />
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
