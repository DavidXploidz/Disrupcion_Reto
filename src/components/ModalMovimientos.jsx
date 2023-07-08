import { FaRegTimesCircle, FaPlusCircle, FaMinusCircle} from "react-icons/fa";
import useApp from '../hooks/useApp';
import Modal from 'react-modal';
import { createRef, useState } from "react";
import fechaActual from "../helpers/obtenerFecha";
import { toast } from 'react-toastify';
import axios from "axios";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement('#root');
export default function ModalMovimientos() {

    const conceptoRef = createRef();
    const cantidadRef = createRef();

    const { consultarMovimientos, modal, handleClickModal, mesActual } = useApp();
 
    const handleClickAgregar = (opcion) => {
        setOpcion(opcion)
    }
    
    const [opcion, setOpcion] = useState('');
    const [movimiento, setMovimiento] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const day = new Date().getDate();

        const nuevoMovimiento = {
            concepto: conceptoRef.current.value,
            cantidad: cantidadRef.current.value,
            tipo: opcion,
            fecha: fechaActual(),
            dia: day,
        };
        setMovimiento(nuevoMovimiento);
    
        try {
            const respuesta = await axios.post(`http://localhost:3000/movimientos_${mesActual}`, nuevoMovimiento, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            handleClickModal();
            consultarMovimientos();
            toast.success("Movimiento agregado correctamente!");
        }catch (error) {
            console.log(error);
        }
    }

    console.log(movimiento)

  return (
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
                <form method="POST" onSubmit={handleSubmit}>
                    <input ref={conceptoRef} className='p-1 bg-gray w-100 border rounded text-body-tertiary mb-2' type="text" placeholder='Concepto:' />
                    <input ref={cantidadRef} className='p-1 bg-gray w-100 border rounded text-body-tertiary mb-2' type="float" placeholder='Cantidad:' />
                    <input className='btn btn-primary' type="submit" value={"Agregar"} />
                </form>
            </div>
            )}
        </div>
    </Modal>
  )
}
