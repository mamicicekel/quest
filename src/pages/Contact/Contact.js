import React from 'react'
import './Contact.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaLocationArrow} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import { Row, Col } from 'react-bootstrap'

export default function Contact() {
  return (
    <div>
      <Header />
      <main className='main-contact'>
      <h1>Contact Us</h1>
      <div className='contact-infos'>
        <Row>
          <Col lg={2}>
            <BsFillTelephoneFill size={'20px'}/>
          </Col>
          <Col lg={10}>
            <phone>0216  456 78 90</phone>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <HiMail size={'20px'}/>
          </Col>
          <Col lg={10}>
            <email>fatih@istanbul.com</email>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <FaLocationArrow/>
          </Col>
          <Col lg={10}>
            <address>Topkapı 34093 Fatih/İstanbul</address>
          </Col>
        </Row>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.8885056535!2d28.847373402905955!3d41.00546324288842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1697646974460!5m2!1str!2str" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </main>
      <Footer />
    </div>
  )
}
