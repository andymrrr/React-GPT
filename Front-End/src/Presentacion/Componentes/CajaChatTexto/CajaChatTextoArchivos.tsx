import { FormEvent, useRef, useState } from "react";

interface Propiedad {
  onEnviarMensaje: (mensaje: string) => void;
  placeHolder?: string;
  desabilitarCorreccion?: boolean;
  acepta?: string;
}
export const CajaChatTextoArchivo = ({
  onEnviarMensaje,
  desabilitarCorreccion = false,
  placeHolder,
  acepta
}: Propiedad) => {
    const [mensaje, setMensaje] = useState('')
    const botonArchivoRef = useRef<HTMLInputElement>(null)
    const [selecionarArchivo, setSelecionarArchivo] = useState<File | null>()
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
      <div className=" mr-3">
        <button 
         type="button"
         className="flex items-center justify-center text-gray-400 hover:text-gray-600"
         onClick={()=> botonArchivoRef.current?.click()}
         >
          <i className="fa-solid fa-paperclip text-xl"></i>
        </button>
        <input 
        type="file" 
        ref={botonArchivoRef}
        accept={acepta}
        onChange={(e)=> setSelecionarArchivo(e.target.files?.item(0))}
        hidden
        />
      </div>
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
            <button 
            className=" btn-primary"
            disabled={!selecionarArchivo}
            >
              {
                (!selecionarArchivo)
                ?  <span className=" mr-2">Enviar</span>
                :  <span className=" mr-2">{selecionarArchivo.name.substring(0,10) + '...'}</span>
              }
               
                <i className="fa-regular fa-papel-plane"></i>
            </button>
      </div>
    </form>
  );
};
