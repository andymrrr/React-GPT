import { FormEvent, useState } from "react";

interface Propiedad {
  onEnviarMensaje: (mensaje: string) => void;
  placeHolder?: string;
  desabilitarCorreccion?: boolean;
}
export const CajaChatTexto = ({
  onEnviarMensaje,
  desabilitarCorreccion = false,
  placeHolder,
}: Propiedad) => {
    const [mensaje, setMensaje] = useState('')
  const HadleEnviarMensaje = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (mensaje.trim().length ===0) {
        return;
    }
    onEnviarMensaje(mensaje);
    setMensaje('');
  };
  return (
    <form
      onSubmit={HadleEnviarMensaje}
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className=" flex-grow">
        <div className=" relative w-full">
          <input
            type="text"
            autoFocus
            name="mensaje"
            className="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            placeholder={placeHolder}
            autoComplete={desabilitarCorreccion ? "on" : "off"}
            autoCorrect={desabilitarCorreccion ? "on" : "off"}
            spellCheck={desabilitarCorreccion ? "true" : "false"}
            value={mensaje}
            onChange={(e)=> setMensaje(e.target.value) }
          />
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
