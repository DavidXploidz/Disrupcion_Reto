import './App.css';
import useApp from './hooks/useApp';
import AgregarMovimiento from './components/AgregarMovimiento';
import Balance from './components/Balance';
import Months from './components/Months';
import ModalMovimientos from './components/ModalMovimientos';


function App() {
  const { modal } = useApp();

  return (
    <>
      <Months />
      <div className='container'>
        <Balance />
      </div>
      <AgregarMovimiento />
      {modal && (
        <ModalMovimientos />
      )}
    </>
  )
}

export default App
