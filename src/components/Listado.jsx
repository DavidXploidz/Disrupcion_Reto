import Movimiento from "./Movimiento";
import useApp from "../hooks/useApp";
import obtenerFecha from '../helpers/obtenerFecha';

export default function Listado() {

    const { movimientos } = useApp();

    const movimientos_hoy = movimientos.filter(mov => mov.fecha === obtenerFecha());
    const movimientos_antes = movimientos.filter(mov => mov.fecha !== obtenerFecha());
  
  return (
    <div className="mt-3 p-0 col-lg-6 mx-auto">
        <p className="fw-bold mb-0">Hoy - { obtenerFecha()}</p>
        {movimientos_hoy.map(movimiento => { 
            return(
                <Movimiento key={movimiento.id} movimiento={movimiento} />
            )
        })}
        <p className="fw-bold mb-0">Anteriores</p>
        {movimientos_antes.map(movimiento => { 
            return(
                <Movimiento key={movimiento.id} movimiento={movimiento} />
            )
        })}
    
    </div>
  )
}
