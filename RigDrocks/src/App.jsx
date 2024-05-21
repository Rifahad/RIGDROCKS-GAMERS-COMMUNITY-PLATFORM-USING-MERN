
import './App.css'
import About from './Pages/About';
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    {/* <Route path='/signup' element={<About/>}/> */}
    {/* <Route path='/login' element={<Home/>}/> */}

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
