import { useContext } from "react";
import AppProvider from '../context/AppProvider.jsx'

const useApp = () => {
    return useContext(AppProvider)
}

export default useApp