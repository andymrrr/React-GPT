import './Loading.css'
interface Propiedad {
    className?:string;
}
export const Loading = ({className}: Propiedad) => {
  return (
    <div className={`typing ${className}`}>
        <span className=" circle scaling">
        </span>
        <span className=" circle scaling">
        </span>
        <span className=" circle scaling">
        </span>
    </div>
  )
}
