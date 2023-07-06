
import './App.css';
import Modal from 'react-modal';
import AgregarMovimiento from './components/AgregarMovimiento';
import Balance from './components/Balance';
import Months from './components/Months';
import useApp from './hooks/useApp'
import { FaRegTimesCircle, FaPlusCircle, FaMinusCircle} from "react-icons/fa";
import { useState } from 'react';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {

  const { modal, handleClickModal } = useApp();

  const handleClickAgregar = (opcion) => {
    setOpcion(opcion)
  }

  const [opcion, setOpcion] = useState('');

  Modal.setAppElement('#root');
  return (
    <>
      <Months />
      <div className='container'>
        <Balance />
      </div>
      <AgregarMovimiento />

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <button className='btn position-absolute top-0 end-0' onClick={() => handleClickModal()}>
            <FaRegTimesCircle className='fs-1 text-danger' />
          </button>
          <div className='mt-3'>
            <h5 className='text-center text-secondary'>Registrar movimiento</h5>
            <div className='row text-center'>
              <div className='col-6'>
                <button onClick={()=>handleClickAgregar('gasto')} className='btn text-secondary fw-medium'><FaMinusCircle className='app-number app-number--danger' /></button>
              </div>
              <div className='col-6'>
                <button onClick={()=>handleClickAgregar('ingreso')} className='btn text-secondary fw-medium'><FaPlusCircle className='app-number app-number--success' /></button>
              </div>
            </div>
            {opcion && (
              <div className={`border border-2 mt-3 p-3 rounded ${opcion === 'gasto' ? 'border-danger' : 'border-success'}`}>
                {opcion === 'gasto' && <p className='fs-5 text-secondary fw-bolder'>Nuevo Gasto</p>}
                {opcion === 'ingreso' && <p className='fs-5 text-secondary fw-bolder'>Nuevo Ingreso</p>}
                <form action="">
                  <input className='p-1 bg-gray w-100 border rounded text-body-tertiary mb-2' type="text" placeholder='Concepto:' />
                  <input className='p-1 bg-gray w-100 border rounded text-body-tertiary mb-2' type="number" placeholder='Cantidad:' />
                  <input className='btn btn-primary' type="submit" value={"Agregar"} />
                </form>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  )
}

export default App
