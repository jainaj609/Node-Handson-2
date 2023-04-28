import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Header from './Header'
const RoutesFile = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}

export default RoutesFile
