import React from 'react'
import {motion} from 'framer-motion'
import "../../styles/productCard.css"
import {Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'



const ProductCard = ({item}) => {

  const dispatch = useDispatch

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
      id: item.id, 
      productName : item.productName,
      price: item.price,
      image : item.imgUrl
    })
    );

    toast.success("Product added successfully")
  }
  return (
    <Col md='4' lg='3' className='mb-4'>
    <div className="product__item">
        <div className="product__image">
            <motion.img whileHover={{scale:1.2}} src={ item.imgUrl} alt="" />
        </div>
        <div className='p-2 product__info' >
        <h3 className="product__name"> <Link to={`/shop/${item.id}`}>{item.productName}</Link> </h3>
        <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
        <span className="price">${item.price}</span>
        <motion.span whileTap={{scale:1.4}} onClick={addToCart} >
          <i class="ri-add-line"></i>
          </motion.span>
        </div>
    </div>
    </Col>

  )
}

export default ProductCard