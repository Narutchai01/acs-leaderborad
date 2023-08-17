import { Routes,Route } from 'react-router-dom'
import './App.css'
// import TableScore from './components/TableScore'
import Total from './page/Total'
import Navbar from './components/Navbar'
import Weekly from './page/Weekly'


function App() {




  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Total/>}/> 
        <Route path='/weekly' element={<Weekly/>}/>
      </Routes>
    </>
  )
}

export default App
