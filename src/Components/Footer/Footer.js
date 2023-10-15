import React from 'react'
import './Footer.css'
import { Row, Col } from 'react-bootstrap'
import Logo from '../../assets/images/quest-white.png'

export default function Footer() {
  return (
    <div className='main-footer'>
      <Row>
        <Col sm={12} lg={6}>
          <img src={Logo} />
        </Col>
        <Col sm={6} lg={3}>
          <span>Pages</span>
          <p>Home</p>
          <p>About</p>
          <p>Courses</p>
          <p>Teachers</p>
        </Col>
        <Col sm={6} lg={3}>
          <span>Pages</span>
          <p>Contact</p>
          <p>404</p>
        </Col>
      </Row>
      <hr></hr>
      <div className='socials'>
        <p>Copyright © Quest 2023 – Powered by HubSnacks</p>
        <div className='social-group'>
        <div className='social-background'>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" aria-labelledby="facebook-f1" role="img"><title id="facebook-f1">Follow us on Facebook</title><g id="facebook-f1_layer"><path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></g></svg>
        </div>
        <div className='social-background'>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-labelledby="linkedin-in2" role="img"><title id="linkedin-in2">Follow us on LinkedIn</title><g id="linkedin-in2_layer"><path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path></g></svg>
        </div>
        <div className='social-background'>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-labelledby="twitter3" role="img"><title id="twitter3">Follow us on Twitter</title><g id="twitter3_layer"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></g></svg>
        </div>
        </div>
      </div>
    </div>
  )
}
