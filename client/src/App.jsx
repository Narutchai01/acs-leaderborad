import { Routes, Route } from 'react-router-dom'
import './App.css'
// import TableScore from './components/TableScore'
import Total from './page/Total'
import Navbar from './components/Navbar'
import Weekly from './page/Weekly'
import Roundpage from './page/Roundpage'


function App() {




  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Total />} />
        <Route path='/weekly/:dateId' element={<Weekly/>}/>
        <Route path='/weekly/:dateId/round' element={<Roundpage/>}/>
      </Routes>
    </>
  )
}

export default App
