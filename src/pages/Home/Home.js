import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header/Header'
import Vase from '../../assets/images/home-top-photo.jpg'
import Button from '../../Components/Button/Button';
import InfoCard from '../../Components/Cards/InfoCard/InfoCard'

export default function Home() {

  const navigate = useNavigate();

  const navigateToCourses = () => {
    navigate('courses');
  };

  return (
    <>
      <Header />
      <main className='main-home'>
        <section className='section-first'>
          <Row>
            <Col sm={12} lg={6} className='left-group'>
              <h1>Grow your skills, define your future</h1>
              <p>Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.</p>
              <div>
                <Button className='button one' onClick={navigateToCourses} text='Explore Courses' />
                <Button className='button two' text='Learn More' />
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <img src={Vase} />
            </Col>
          </Row>
        </section>
        <section className='section-second'>
          <h2>H2 heading module</h2>
            <Row className='items'>
              <Col sm={12} lg={4}><InfoCard /></Col>
              <Col sm={12} lg={4}><InfoCard /></Col>
              <Col sm={12} lg={4}><InfoCard /></Col>
            </Row>
          <Button className='button two' text='Explore Courses' />
        </section>
      </main>
    </>
  )
}
