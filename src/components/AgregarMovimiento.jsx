import useApp from '../hooks/useApp'

export default function AgregarMovimiento() {

    const {handleClickModal  } = useApp();

  return (
    <div className='fixed-mov'>
        <button className='mov-btn text-white rounded w-100 fw-bold' onClick={() => handleClickModal()}>Agregar Movimiento</button>
    </div>
  )
}
