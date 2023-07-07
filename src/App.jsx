import './App.css';
import useApp from './hooks/useApp';
import AgregarMovimiento from './components/AgregarMovimiento';
import Balance from './components/Balance';
import Months from './components/Months';
import ModalMovimientos from './components/ModalMovimientos';
import Listado from './components/Listado';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const { modal, mostrar } = useApp();

  return (
    <>
      <Months />
      <ToastContainer />
      <div className='container'>
        <Balance />
        {mostrar && <Listado />}
      </div>
      <AgregarMovimiento />
      {modal && (
        <ModalMovimientos />
      )}
    </>
  )
}

export default App
