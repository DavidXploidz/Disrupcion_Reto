import { createContext, useState } from "react";


const AppContext = createContext()

const AppProvider = ({children}) => {

    const [modal, setModal] = useState(false);

    const handleClickModal = () => {
        setModal(!modal);
        console.log('Abrir modal');
    }

    return(
        <AppContext.Provider 
            value={{
                modal,
                handleClickModal

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