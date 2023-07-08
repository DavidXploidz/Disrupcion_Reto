import { useState } from "react";
import formatearDinero from "../helpers/formatearDinero";
import { FaChevronDown, FaChevronUp, FaStop, FaCircle } from "react-icons/fa";

export default function Movimiento({movimiento}) {

  const { id, concepto, cantidad, tipo, fecha} = movimiento;

  const [active, setActive] = useState(null);

  const dinero = parseFloat(cantidad);

  const handleClickCollapse = (id) => {
    if(active === id){
        setActive(null);
        return;
    }
    setActive(id)
  }

  return (
    <div className="p-3 bg-white rounded shadow-sm mb-2 " onClick={() => handleClickCollapse(id)}>
        <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center gap-3">
                {tipo === 'ingreso' ? <FaStop className="app-number--success fs-1" /> : <FaCircle className="app-number--danger fs-1" /> }
                <p className="mb-0 fw-medium">{concepto}</p>
            </div>
            <div className="d-flex align-items-center gap-2">
                {tipo === 'ingreso' ? (
                    <p className="app-number app-number--success fw-bolder fs-6 mb-0">+{formatearDinero(dinero)}</p>
                ): (
                    <p className="app-number app-number--danger fw-bolder fs-6 mb-0">-{formatearDinero(dinero)}</p>
                )}
                {active === id ? <FaChevronUp className="text-body-tertiary" /> :  <FaChevronDown className="text-body-tertiary" /> }
               
            </div>
        </div>
        <div className={`ps-5 pe-2 pt-2 pb-0 ${active === id ? 'd-block' : 'd-none'}`}>
            <p className="text-body-tertiary mb-0">Contenido extra aqui!</p>
        </div>
    </div>
  )
}
