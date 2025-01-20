interface Propiedad {
    texto: string
}
export const MiMensaje = ({texto}:Propiedad) => {
  return (
      <div className=" col-start-1 col-end-13 p-3 rounded-lg">
             <div className="flex items-center justify-start flex-row-reverse">
                 <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"> 
                     F
                 </div>
                 <div className=" relative mr-3 text-sm bg-indigo-700 py-2 px-4 shadow rounded-xl">
                     <div>{texto}</div>
                 </div>
             </div>
         </div>
  )
}
