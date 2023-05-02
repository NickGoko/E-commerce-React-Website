import React, {useRef, useEffect} from 'react'

import { NavLink } from 'react-router-dom'
import'./header.css'
import {motion} from 'framer-motion'

import {Container, Row } from 'reactstrap'

import logo from '../../assets/images/eco-logo.png'
import user_icon from '../../assets/images/user-icon.png'


// Define an array of navigation links with their respective paths and display names.
const nav__links = [
    {
        path :'home',
        display: 'Home'
    },
    {
        path :'shop',
        display: 'Shop'
    },
    {
        path :'cart',
        display: 'Cart'
    }
]

// Define a functional component called Header that returns a header element with the logo, navigation menu, and user icons.
const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const stickyHeaderFunc = ( ) => {
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
            {headerRef.current.classList.add('sticky__header')
            }
            else{
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() =>{
        stickyHeaderFunc()

        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  return (
    <header className="header" ref={headerRef}>
        <Container>
            <Row>
                 <div className="nav_wrapper">
                    <div className="logo">
                        {/* Display the logo image and the company name and slogan */}
                        <img src={logo} alt="logo" /> 
                        <div>
                            <h1> Safe Mart</h1> 
                            {/* <p>Since 2002</p> */}
                        </div>
                    </div>
                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className="menu">
                        {
                            // Map over the navigation links array and create a list item for each link
                            nav__links.map((item, index) => (
                                <li className="nav__item" key={index}>
                                    {/* Create a NavLink component for each link, with the path and display name */}
                                    <NavLink to={item.path} className={(navClass)=> navClass.isActive ? 'nav__active' : "" }>{item.display}</NavLink>

                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className="nav__icons">
                        {/* Display icons for the shopping cart, favorites, and user account */}
                        <span className="cart__icon">
                            <i class="ri-shopping-bag-line"></i> 
                            <span className="badge">1</span>
                        </span>
                        <span className="fav__icon">
                            <i class="ri-heart-line"></i> 
                            <span className="badge">1</span>
                        </span>
                        <span className='user__icon'> 
                        <motion.img whileHover={{scale:1.2}} src={user_icon} alt="user_icon" className='user__icon' /> 
                        </span>
                    </div>
                    <div className=" mobile__menu">
                        {/* Display a menu icon for mobile devices */}
                        <span onClick={menuToggle}>
                        <i class="ri-menu-line"></i>
                        </span>
                    </div>
                 </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header
