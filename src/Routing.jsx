import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp'
import Cart from './Pages/Cart/Cart'
import Rsult from './Pages/Result/Result'
import Order from './Pages/Orders/Order'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Payment from './Pages/Payment/Payment'


function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<Order />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/category/:CategoryName" element={<Rsult />} />
                <Route path="/products/:id" element={<ProductDetail />} />

                {/* Add more routes here as needed */}
            </Routes>
        </Router>
    )
}

export default Routing
