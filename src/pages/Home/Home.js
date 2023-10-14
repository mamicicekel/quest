import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header/Header'
import Vase from '../../assets/images/home-top-photo.jpg'
import Path from '../../assets/images/path.jpg'
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
        <section className='section-third'>
          <Row>
            <Col sm={12} lg={6} className='left-group'>
              <h1>Lorem ipsum dolor sit, consectetur.</h1>
              <p>Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.</p>
              <div>
                <Button className='button one' onClick={navigateToCourses} text='Explore Courses' />
                <Button className='button two' text='Learn More' />
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <div className='right-group'>
                <img src={Path} />
                <div className='container'>
                  <div className='top-title'>
                    <p>Featured Teacher</p>
                  </div>
                  <h4>“Teaching on Education platform has been an amazing experience”</h4>
                  <h5>Lorem Ipsum</h5>
                  <p>Marketing Lead at Facebook</p>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className='section-fourth'>
          <Row>
            <Col sm={12} lg={6} >
              <div className='left-group'>
                <h1>Grow your career today with the Education courses</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div>
                  <Button className='button two' onClick={navigateToCourses} text='Explore Courses' />
                </div>
              </div>
            </Col>
            <Col sm={12} lg={6} >
              <div className='right-group'>
              <Row>
                <Col className='mid-box'>
                  <div className='box'>
                    <span>9/10</span>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className='box'>
                  <span>96%</span>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </Col>
                <Col className='mid-box'>
                  <div className='box'>
                  <span>10K+</span>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </Col>
              </Row>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  )
}
