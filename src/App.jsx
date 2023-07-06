
import './App.css'
import Balance from './components/Balance';
import Months from './components/Months';
import useApp from './hooks/useApp'


function App() {

  const { dato } = useApp();

  return (
    <>
      <Months />
      <div className='container'>
        <Balance />
      </div>
    </>
  )
}

export default App
