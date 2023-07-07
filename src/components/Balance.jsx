import { useEffect, useState } from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import useApp from '../hooks/useApp';
import formatearDinero from '../helpers/formatearDinero';
import '../styles/utilities.css'

export default function Balance() {

    let { gastos, ingresos, handleClickMostrar} = useApp();
   
    const [active, setActive] = useState(false);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        setBalance(ingresos-gastos);
    },[gastos, ingresos]);

    const handleClickAnaliticas = () => {
        setActive(!active)
    }

  return (
    <div className='bg-white p-3 mt-4 rounded-10 shadow col-lg-6 mx-auto'>
        <p className='text-center fw-semibold fs-5'>Balance del mes</p>
        <p className='fw-bold text-center app-number'>{formatearDinero(balance)}</p>
        <div className='row'>
            <div className='col-6 text-center app-number app-number--success border-end'>
                <p className='mb-0 fs-5'>Ingresos</p>
                <p className='fs-1 fw-bold'>+{formatearDinero(ingresos)}</p>
            </div>
            <div className='col-6 text-center app-number app-number--danger border-start'>
                <p className='mb-0 fs-5'>Gastos</p>
                <p className='fs-1 fw-bold'>-{formatearDinero(gastos)}</p>
            </div>
        </div>
        <p onClick={() => {handleClickAnaliticas(), handleClickMostrar()}} className='mt-3 text-center text-body-tertiary fw-light'>Ver analíticas {active ? <FaAngleDown /> : <FaAngleUp /> } </p>
    </div>
  )
}
