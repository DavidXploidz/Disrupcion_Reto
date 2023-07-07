import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import calcularGasto from "../helpers/calcularGasto";
import calcularIngreso from "../helpers/calcularIngreso";

const AppContext = createContext()

const AppProvider = ({children}) => {

    const [months, setMonths] = useState([
        'Enero','Febrero','Marzo','Abril','Mayo','Junio',
        'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
    ]);
    const [mesActual, setMesActual] = useState("");
    const [modal, setModal] = useState(false);
    const [movimientos, setMovimientos] = useState([]);
    const [ingresos, setIngresos] = useState([]);
    const [gastos, setGastos] = useState([]);
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        consultarMovimientos();
    },[]);

    const handleMesActual = (mes) => {
        setMesActual(mes);
    }   

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleClickMostrar = () => {
        setMostrar(!mostrar)
    }

    const consultarMovimientos = async () => {
        const { data } = await axios('http://localhost:3000/movimientos');
        setMovimientos(data);
        setGastos(calcularGasto(data));
        setIngresos(calcularIngreso(data));
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
                handleClickMostrar
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