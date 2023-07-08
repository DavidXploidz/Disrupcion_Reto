import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import '../styles/months.css';
import useApp from '../hooks/useApp';

export default function Months() {

    const { mesActual, handleClickNextMonth, handleClickPrevMonth } = useApp()

  return (
    <div className='d-flex align-items-center gap-4 justify-content-center w-100 text-white py-4 bg-month shadow'>
        <FaAngleLeft className='fs-1' onClick={() => handleClickPrevMonth()} />
        <h2 className='fw-bold'>{mesActual}</h2>
        <FaAngleRight className='fs-1' onClick={() => handleClickNextMonth()} />
    </div>
  )
}
