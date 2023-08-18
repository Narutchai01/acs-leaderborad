import { Routes,Route } from 'react-router-dom'
import './App.css'
// import TableScore from './components/TableScore'
import Total from './page/Total'
import Navbar from './components/Navbar'
import Weekly from './page/Weekly'
import W1_Main from './page/weekly_components/weekly_1/main_w1'
import W2_Main from './page/weekly_components/weekly_2/main_w2'
import W3_Main from './page/weekly_components/weekly_3/main_w3'
import W4_Main from './page/weekly_components/weekly_4/main_w4'


function App() {




  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Total/>}/> 
        <Route path='/weekly' element={<Weekly/>}/>
        <Route path='/weekly/1' element={<W1_Main/>}/>
        <Route path='/weekly/2' element={<W2_Main/>}/>
        <Route path='/weekly/3' element={<W3_Main/>}/>
        <Route path='/weekly/4' element={<W4_Main/>}/>
      </Routes>
    </>
  )
}

export default App
