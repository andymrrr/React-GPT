import { NavLink } from "react-router";

interface Propiedades {
    llave: string;
    ruta: string;
    icono: string;
    titulo: string;
    descripcion: string
    
}
export const MenuItems = ({llave,ruta,icono,titulo,descripcion}: Propiedades) => {
  return (
    <NavLink
      key={llave}
      to={ruta}
      className={({ isActive }) =>
        isActive
          ? "flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors"
          : "flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors"
      }
    >
      <i className={`${icono} text-2xl mr-4 text-indigo-400`}></i>
      <div className=" flex flex-col flex-grow">
        <span className=" text-white text-lg font-semibold">
          {titulo}
        </span>
        <span className=" text-gray-400 text-sm">{descripcion}</span>
      </div>
    </NavLink>
  );
};
