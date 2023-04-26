import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { Container, Row, Col } from "reactstrap";

import Helmet from '../components/helmet/Helmet'

import '../styles/home.css'

import Services from '../services/Services';

import Clock from '../components/ui/Clock'

import heroImg from '../assets/images/hero-img.png';

import ProductList from '../components/ui/ProductList'

import products from '../assets/data/products'

import counterImg from '../assets/images/counter-timer-img.png'


const Home = () => {
const [trendingProducts, setTrendingProducts ] = useState([])
const [bestSalesProducts, setBestSalesProducts ] = useState([])
const [mobileProducts, setMobileProducts ] = useState([])
const [wirelessProducts, setWirelessProducts ] = useState([])
const [popularProducts, setPopularProducts ] = useState([])

  const year = new Date().getFullYear()

  useEffect(() =>{
    const filteredTrendingProducts = products.filter(
      (item)=> item.category === 'chair');

      const filteredBestSalesProducts = products.filter(
        (item)=> item.category === 'sofa');

      const filteredMobileProducts = products.filter(
        (item)=> item.category === 'mobile');

      const filteredWirelessProducts = products.filter(
        (item)=> item.category === 'wireless'); 

      const filteredPopularProducts = products.filter(
        (item)=> item.category === 'watch'); 
   
      setTrendingProducts(filteredTrendingProducts);
      setBestSalesProducts(filteredBestSalesProducts);
      setMobileProducts(filteredMobileProducts);
      setWirelessProducts(filteredWirelessProducts);
      setPopularProducts(filteredPopularProducts);
  }
  ,[]
  )
  return(
<Helmet title={'Home'}>
  <section className="hero__section">
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="hero__content">
            <p className="hero__subtitle">Trending products in {year} </p>
            <h2> Make Your Interior More Minimalist & Modern </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quaerat provident itaque quia maiores, debitis fuga placeat? Harum, eligendi distinctio.</p>
              <motion.button whileTap={{scale:1.2}} className="buy_btn"> 
              <Link to='/shop'>Shop Now</Link> 
              </motion.button> 
          </div>
        </Col>
        <Col lg='6' md='6'>
          <img src={heroImg} alt="" className="hero__img" />
        </Col>
      </Row>
    </Container>
    </section>
    <Services/>
    <section className="trending__products">
       <Container>
        <Row>
          <Col lg='12' className='text-center'>
          <h2 className="section__title">Trending Products</h2>
          </Col>
          <ProductList data={trendingProducts}/>
        </Row>
       </Container>
    </section>

    <section className="best__sales">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
          <h2 className="section__title">Best Sales</h2>
          </Col>

          <ProductList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>
    <section className="timer__counter">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="clock__top-content">
              <h4 className='fs-6 mb-2'>Limited Offers</h4>
              <h3 className='fs-5 mb-3'> Quality Armchairs</h3>
            </div>
          <Clock/>
          <motion.button whileHover={{scale:1.2}} className="buy__btn"><Link to='/shop'> Visit Store</Link>
          </motion.button>
          </Col>

          <Col lg='6' md='6' className='text-end'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="new__arrivals mb-1">
      <Container>
        <Row>
        <Col lg='12' className='text-center'>
          <h2 className="section__title">New Arrivals</h2>
          </Col>
          <ProductList data={mobileProducts}/>
          <ProductList data={wirelessProducts}/>
        </Row>
      </Container>
    </section>

    <section className="popular__category mb-5">
    <Container>
        <Row>
        <Col lg='12' className='text-center'>
          <h2 className="section__title">Popular in Category</h2>
          </Col>
          <ProductList data={popularProducts}/>
        </Row>
      </Container>
    </section>
</Helmet>
  ) 
}

export default Home