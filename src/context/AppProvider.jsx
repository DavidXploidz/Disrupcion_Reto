import { createContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {

    const [months, setMonths] = useState([
        'Enero','Febrero','Marzo','Abril','Mayo','Junio',
        'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
    ]);
    const [mesActual, setMesActual] = useState("");
    const [modal, setModal] = useState(false);

    const handleMesActual = (mes) => {
        setMesActual(mes);
    }   

    const handleClickModal = () => {
        setModal(!modal);
    }

    return(
        <AppContext.Provider 
            value={{
                months,
                mesActual,
                handleMesActual,
                modal,
                handleClickModal,
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