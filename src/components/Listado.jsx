import Movimiento from "./Movimiento";
import useApp from "../hooks/useApp";
import obtenerFecha from '../helpers/obtenerFecha';
import Alerta from "./Alerta";

export default function Listado() {

    const { movimientos } = useApp();

    const currentDay = new Date().getDate();

    const movimientos_hoy = movimientos.filter(mov => mov.dia === currentDay);
    const movimientos_ayer = movimientos.filter(mov => mov.dia === currentDay - 1 );
    const movimientos_mes = movimientos.filter(mov => mov.dia < currentDay - 2);
  
  return (
    <div className="mt-3 mb-5 p-0 col-lg-6 mx-auto">
        <p className="fw-bold mb-0">Hoy - {currentDay} {obtenerFecha()}</p>
        {movimientos_hoy.length <= 0 && <Alerta>¡Sin movimientos!</Alerta> }
        {movimientos_hoy.map(movimiento => { 
            return(
                <Movimiento key={movimiento.id} movimiento={movimiento} />
            )
        })}
        <p className="fw-bold mb-0">Ayer - {currentDay - 1} {obtenerFecha()}</p>
        {movimientos_ayer.length <= 0 && <Alerta>¡Sin movimientos!</Alerta> }
        {movimientos_ayer.map(movimiento => { 
            return(
                <Movimiento key={movimiento.id} movimiento={movimiento} />
            )
        })}
        <p className="fw-bold mb-0">Este mes</p>
        {movimientos_mes.length <= 0 && <Alerta>¡Sin movimientos!</Alerta> }
        {movimientos_mes.map(movimiento => { 
            return(
                <Movimiento key={movimiento.id} movimiento={movimiento} />
            )
        })}
    </div>
  )
}
