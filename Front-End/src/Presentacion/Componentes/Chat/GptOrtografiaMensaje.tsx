
interface Propiedad {
    errores: string[];
    mensaje:string;
    puntuacion: number
}
export const GptOrtografiaMensaje = ({errores,mensaje,puntuacion}:Propiedad) => {
  return (
    <div className=" col-start-1 col-end-8 p-3 rounded-lg">
        <div className="flex flex-row items-start">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 flex-shrink-0"> 
                G
            </div>
            <div className=" relative ml-3 text-sm bg-black bg-opacity-25 pt-3 pb-2 px-4 shadow">
               <h3 className=" text-3xl">Puntaje: {puntuacion}</h3>
               <p>{mensaje}</p>
               {
                (errores.length === 0)
                ? <p> No se Enccontraron errores</p>
                : (
                    <>
                        <h3 className=" text-2xl">Errores encontrado</h3>
                        <ul>
                            {
                                errores.map((error, i) => (
                                    <li key={i}>
                                        {error}
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                )
               }
            </div>
        </div>
    </div>
  )
}
