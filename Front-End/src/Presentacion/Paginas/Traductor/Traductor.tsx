import { useState } from "react";
import { GptMensaje, MiMensaje, Loading, CajaChatTextoSelect } from "../../Componentes";
import { TraductorCasoUso } from "../../../Nucleo/CasoUso";

interface Mensaje {
  texto: string;
  esGpt: boolean;
}
const lenguajes = [
  { id: "alemán", texto: "Alemán" },
  { id: "árabe", texto: "Árabe" },
  { id: "bengalí", texto: "Bengalí" },
  { id: "francés", texto: "Francés" },
  { id: "hindi", texto: "Hindi" },
  { id: "inglés", texto: "Inglés" },
  { id: "japonés", texto: "Japonés" },
  { id: "mandarín", texto: "Mandarín" },
  { id: "portugués", texto: "Portugués" },
  { id: "ruso", texto: "Ruso" },
];

export const TraductorPagina = () => {
  const [estaCargando, setEstaCargando] = useState<boolean>(false);
  const [mesajes, setmesaje] = useState<Mensaje[]>([]);

  const handleEnviar = async (texto: string, opcionSelecionada: string) => {
    setEstaCargando(true);
    const mensajeNuevo = `Traduce: ${texto} al idioma ${opcionSelecionada}`
    setmesaje((anterior) => [...anterior, { texto: mensajeNuevo, esGpt: false }]);

    const {ok,mensaje} = await TraductorCasoUso(texto,opcionSelecionada)
   
    if (!ok) {
        return alert(mensaje)
    }
    setmesaje((anterior) => [...anterior, { texto: mensaje, esGpt: false }]);

    setEstaCargando(false);
  };
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenida*/}
          <GptMensaje texto="Hola, puedes escribir  y te ayudo con las correcciones" />
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
      <CajaChatTextoSelect
        onEnviarMensaje={handleEnviar}
        placeHolder="Escribe lo que deseas"
        opciones={lenguajes}
      />
    </div>
  );
};
