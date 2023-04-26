import {Routes, Route, Navigate} from 'react-router-dom'

import Shop from '../pages/Shop'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'

 
const router = () => {
  return (
    /* Navigate must be in self closing tag */
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='home'/>} /> 
        <Route path='home' element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='shop/:id' element={<ProductDetails/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='signup' element={<Signup/>} />
        <Route path='login' element={<Login/>} />
         
      </Routes>
    </div>
  )
}

export default router
