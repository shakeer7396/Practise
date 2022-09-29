import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Tesla from '../Components/Tesla'
import User from '../Components/User'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/tesla' element={<Tesla />}/>
        <Route path='/user' element={<User />}/>

    </Routes>
  )
}

export default AllRoutes