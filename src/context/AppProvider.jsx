import { createContext, useState } from "react";


const AppContext = createContext()

const AppProvider = ({children}) => {

    const [dato, setDato] = useState('Hola')

    return(
        <AppContext.Provider 
            value={{
                dato
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