import React from 'react'
import './Teachers.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Row, Col } from 'react-bootstrap'
import Paper from '../../assets/images/paper.jpg'

export default function Teachers() {
  return (
    <div>
      <Header />
      <main className='main-teachers'>
        <h1>Our Teachers</h1>
        <section className='section-first'>
          <Row>
            <Col sm={12} lg={4}>
              <img src={Paper} />
              <span>Name Surname</span>
              <p>Role</p>
            </Col>
            <Col sm={12} lg={4}>
              <img src={Paper} />
              <span>Name Surname</span>
              <p>Role</p>
            </Col>
            <Col sm={12} lg={4}>
              <img src={Paper} />
              <span>Name Surname</span>
              <p>Role</p>
            </Col>
          </Row>
        </section>
      </main>
      <Footer />
    </div>
  )
}
