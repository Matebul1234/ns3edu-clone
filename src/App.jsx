import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import Layout from './Component/Layout';
import Header from './Component/Header';
import Contact from './Component/Contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Routes>
        <Route path='/' element= {<Layout/>}/>
        <Route path='/home' element= {<Home/>}/>
      </Routes> */}

      <BrowserRouter>
      {/* <Header/> */}
       <main className='min-h-screen'>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/Contact' element= {<Contact/>}/>
      </Routes>
      </main>
      </BrowserRouter>
    </>
  )
}

export default App
