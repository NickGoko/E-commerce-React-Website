import React from 'react'
import "./footer.css"
import { Container, Row, Col, ListGroup, ListGroupItem  } from 'reactstrap'
import {Link} from 'react-router-dom'


const Footer = () => {

  const year = new Date().getFullYear()

  return (
<footer className='footer '>
  <Container>
    <Row>
      <Col lg='4' md='6' className='mb-4' >
      <div className="logo">
        <div>
            <h1 className='text-white'> Safe Mart</h1> 
            {/* <p>Since 2002</p> */}
        </div>
        </div>
        <p className="footer__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Illum quidem, odio beatae amet ratione id aspernatur fugiat magni odit officia!
        </p>
      </Col>
      <Col lg='3' md='3' className='mb-4' >
        <div className="footer__quick-links">
          <h4 className="quick__links-title"> Top Categories</h4>
          <ListGroup>
          <ListGroupItem className= 'ps-0 border-0'><Link to ='#'>Mobile Phones</Link></ListGroupItem>
          <ListGroupItem className= 'ps-0 border-0'> <Link to ='#'> Modern Sofas</Link></ListGroupItem>
          <ListGroupItem className= 'ps-0 border-0'><Link to='#'>Arm Chair</Link></ListGroupItem>
          <ListGroupItem className= 'ps-0 border-0'><Link to= '#'>Smart Watches</Link></ListGroupItem>
          </ListGroup>
        </div>
      </Col>
      <Col lg='2' md='3' className='mb-4'>
      <div className="footer__quick-links">
          <h4 className="quick__links-title"> Useful Links</h4>
          <ListGroup>
          <ListGroupItem className= 'ps-0 border-0'><Link to ='/shop'>Shop</Link></ListGroupItem>
          <ListGroupItem className= 'ps-0 border-0'> <Link to ='/cart'> Cart</Link></ListGroupItem>
          <ListGroupItem className= 'ps-0 border-0'><Link to='/login'>Login</Link></ListGroupItem>
          <ListGroupItem className= 'ps-0 border-0'><Link to= '#'>Privacy Policy</Link></ListGroupItem>
          </ListGroup>
        </div>
      </Col>
      <Col lg='3' md='4'>
      <div className="footer__quick-links">
          <h4 className="quick__links-title"> Contact</h4>
          <ListGroup className='footer__contact'>
          <ListGroupItem className= 'ps-0 border-0 align-items-center d-flex'>
            <span>
            <i class="ri-map-pin-line"></i>
            </span>
            <p>1234, Avenue Lane </p>
            </ListGroupItem>
          <ListGroupItem className= 'ps-0 border-0 align-items-center d-flex'>
            <span>
            <i class="ri-phone-line"></i>
            </span>
            <p>+254 (712 345 678)</p>
            </ListGroupItem>
          <ListGroupItem className= 'ps-0 border-0 align-items-center d-flex'>
            <span>
            <i class="ri-mail-line"></i>
            </span>
          <p>example123@gmail.com</p>
          </ListGroupItem>
          </ListGroup>
        </div>
      </Col>

      <Col md='12'>
      <p className="footer__copyright">
        Copyright {year} developed by Nick Goko. All rights reserved
      </p>
      </Col>
    </Row>
  </Container>

</footer>
  )
}

export default Footer