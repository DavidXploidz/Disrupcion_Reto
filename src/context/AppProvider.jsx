import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import calcularGasto from "../helpers/calcularGasto";
import calcularIngreso from "../helpers/calcularIngreso";
import obtenerMesActual from '../helpers/obtenerMesActual';

const AppContext = createContext()

const AppProvider = ({children}) => {

    const [months, setMonths] = useState(['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']);

    const [mesActual, setMesActual] = useState(obtenerMesActual(months));
    const [index, setIndex] = useState(6);
    const [modal, setModal] = useState(false);
    const [movimientos, setMovimientos] = useState([]);
    const [ingresos, setIngresos] = useState([]);
    const [gastos, setGastos] = useState([]);
    const [mostrar, setMostrar] = useState(false);

    const [nuevo, setNuevo] = useState('');

    useEffect(() => {
        consultarMovimientos();
    },[mesActual]);

    const handleMesActual = (mes) => {
        setMesActual(mes);
    }   

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleClickMostrar = () => {
        setMostrar(!mostrar);
    }

    const handleClickPrevMonth = () => {
        if (index <= 0) {
          // Regresa el array al último elemento
          setIndex(months.length - 1);
          setMesActual(months[months.length - 1]);
        } else {
          setIndex(index - 1);
          setMesActual(months[index - 1]);
        }
    };

    const handleClickNextMonth = () => {
        if (index >= months.length - 1) {
          // Avanza al primer elemento del array
          setIndex(0);
          setMesActual(months[0]);
        } else {
          setIndex(index + 1);
          setMesActual(months[index + 1]);
        }
    };

    const consultarMovimientos = async () => {
        try {
            const { data } = await axios(`http://localhost:3000/movimientos_${mesActual}`);
            setMovimientos(data);
            setGastos(calcularGasto(data));
            setIngresos(calcularIngreso(data));
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <AppContext.Provider 
            value={{
                months,
                mesActual,
                handleMesActual,
                modal,
                handleClickModal,
                movimientos,
                consultarMovimientos,
                gastos,
                ingresos,
                mostrar,
                handleClickMostrar,
                handleClickPrevMonth,
                handleClickNextMonth
            }} 
        >
            {children}
        </AppContext.Provider>
    )
}



export {
    AppProvider
}

export default AppContext