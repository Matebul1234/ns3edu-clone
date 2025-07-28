import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <NavBar/>
    <main className='min-h-screen'>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout