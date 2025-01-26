import { FormEvent, useState } from "react";

interface Propiedad {
  onEnviarMensaje: (mensaje: string,opcion: string) => void;
  placeHolder?: string;
  desabilitarCorreccion?: boolean;
  opciones: Opcion[]
}
interface Opcion {
  id: string;
  texto: string;
}
export const CajaChatTextoSelect = ({
  onEnviarMensaje,
  desabilitarCorreccion = false,
  placeHolder,
  opciones
}: Propiedad) => {
    const [mensaje, setMensaje] = useState('')
    const [seleccionarOpcion, setSeleccionarOpcion] = useState<string>('')
  const HadleEnviarMensaje = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (mensaje.trim().length ===0) {
        return;
    }
    if (seleccionarOpcion ==='') {
      return;
    }
    onEnviarMensaje(mensaje,seleccionarOpcion!);
    setMensaje('');
  };
  return (
    <form
      onSubmit={HadleEnviarMensaje}
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className=" flex-grow">
        <div className="flex">
          <input
            type="text"
            autoFocus
            name="mensaje"
            className=" w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            placeholder={placeHolder}
            autoComplete={desabilitarCorreccion ? "on" : "off"}
            autoCorrect={desabilitarCorreccion ? "on" : "off"}
            spellCheck={desabilitarCorreccion ? "true" : "false"}
            value={mensaje}
            onChange={(e)=> setMensaje(e.target.value) }
          />
          <select
          name="selector"
          value={seleccionarOpcion}
          onChange={(e)=> setSeleccionarOpcion(e.target.value)}
          className=" w-2/5 ml-5 border rounded-xl text-gray-800  focus:outline-none focus:border-indigo-300 pl-4 h-10"
          >
            <option  value="" >Selecionar</option>
            {
              opciones.map(({id,texto}) => (
                <option key={id} value={texto} >{texto}</option>
              ))
            }
          </select>
        </div>
      </div>
      <div className=" ml-4">
            <button className=" btn-primary">
                <span className=" mr-2">Enviar</span>
                <i className="fa-regular fa-papel-plane"></i>
            </button>
      </div>
    </form>
  );
};
