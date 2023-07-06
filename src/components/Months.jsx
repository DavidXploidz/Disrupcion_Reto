import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import '../styles/months.css';

export default function Months() {

    useEffect(() => {
        obtenerMesActual();
    },[]);

    const [months, setMonths] = useState([
        'Enero','Febrero','Marzo','Abril','Mayo','Junio',
        'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
    ]);

    const obtenerMesActual = () => {
        const fechaActual = new Date();
        const mes = fechaActual.getMonth(); 
        const nombreMes = actualMonth(mes);
        return nombreMes;
      };

    const actualMonth = (mes) => {
        return months[mes];
    }

    const handleClickPrevMonth = () => {
        console.log('Resta otro');
    }

    const handleClickNextMonth = () => {
        console.log('Suma otro');
    }

  return (
    <div className='d-flex align-items-center gap-4 justify-content-center w-100 text-white py-4 bg-month shadow'>
        {/* {months.map((month, index) => (
            <button className='btn btn-primary' key={index}>{month}</button>
        ))} */}
        <FaAngleLeft className='fs-1' onClick={() => handleClickPrevMonth()} />
        <h2 className='fw-bold'>{obtenerMesActual()}</h2>
        <FaAngleRight className='fs-1' onClick={() => handleClickNextMonth()} />
    </div>
  )
}
