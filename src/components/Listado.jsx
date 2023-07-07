import Movimiento from "./Movimiento";
import useApp from "../hooks/useApp"

export default function Listado() {

    const { movimientos } = useApp();

  return (
    <div className="mt-3 p-0 col-lg-6 mx-auto d-flex flex-column-reverse">
        {movimientos.map(movimiento => (
            <Movimiento key={movimiento.id} movimiento={movimiento} />
        ))}
    </div>
  )
}
