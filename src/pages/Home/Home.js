import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header/Header'
import Vase from '../../assets/images/home-top-photo.jpg'
import Path from '../../assets/images/path.jpg'
import Elephant from '../../assets/images/elephant.jpg'
import Button from '../../Components/Button/Button';
import InfoCard from '../../Components/Cards/InfoCard/InfoCard'
import InfoCard2 from '../../Components/Cards/InfoCard2/InfoCard2'
import Footer from '../../Components/Footer/Footer';

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
        <section className='section-fifth'>
          <h2>H2 Heading Module</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt.</p>
          <div className='mid-box'>
            <Row>
              <Col sm={12} lg={6}>
                <img src={Elephant} />
              </Col>
              <Col sm={12} lg={6} className='right-group'>
                <Row>
                  <Col lg={2}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true" className='icon'>
                        <path d="M378.94 321.41L284.7 224h49.22c15.3 0 23.66-16.6 13.86-27.53L234.45 69.96c3.43-6.61 5.55-14 5.55-21.96 0-26.51-21.49-48-48-48s-48 21.49-48 48c0 7.96 2.12 15.35 5.55 21.96L36.22 196.47C26.42 207.4 34.78 224 50.08 224H99.3L5.06 321.41C-6.69 333.56 3.34 352 21.7 352H160v32H48c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h288c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16H224v-32h138.3c18.36 0 28.39-18.44 16.64-30.59zM192 31.98c8.85 0 16.02 7.17 16.02 16.02 0 8.84-7.17 16.02-16.02 16.02S175.98 56.84 175.98 48c0-8.85 7.17-16.02 16.02-16.02zM304 432v32H80v-32h224z"/>
                    </svg>
                  </Col>
                  <Col lg={10}>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg={2}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true" className='icon'>
                        <path d="M378.94 321.41L284.7 224h49.22c15.3 0 23.66-16.6 13.86-27.53L234.45 69.96c3.43-6.61 5.55-14 5.55-21.96 0-26.51-21.49-48-48-48s-48 21.49-48 48c0 7.96 2.12 15.35 5.55 21.96L36.22 196.47C26.42 207.4 34.78 224 50.08 224H99.3L5.06 321.41C-6.69 333.56 3.34 352 21.7 352H160v32H48c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h288c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16H224v-32h138.3c18.36 0 28.39-18.44 16.64-30.59zM192 31.98c8.85 0 16.02 7.17 16.02 16.02 0 8.84-7.17 16.02-16.02 16.02S175.98 56.84 175.98 48c0-8.85 7.17-16.02 16.02-16.02zM304 432v32H80v-32h224z"/>
                    </svg>
                  </Col>
                  <Col lg={10}>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg={2}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true" className='icon'>
                        <path d="M378.94 321.41L284.7 224h49.22c15.3 0 23.66-16.6 13.86-27.53L234.45 69.96c3.43-6.61 5.55-14 5.55-21.96 0-26.51-21.49-48-48-48s-48 21.49-48 48c0 7.96 2.12 15.35 5.55 21.96L36.22 196.47C26.42 207.4 34.78 224 50.08 224H99.3L5.06 321.41C-6.69 333.56 3.34 352 21.7 352H160v32H48c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h288c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16H224v-32h138.3c18.36 0 28.39-18.44 16.64-30.59zM192 31.98c8.85 0 16.02 7.17 16.02 16.02 0 8.84-7.17 16.02-16.02 16.02S175.98 56.84 175.98 48c0-8.85 7.17-16.02 16.02-16.02zM304 432v32H80v-32h224z"/>
                    </svg>
                  </Col>
                  <Col lg={10}>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <Button className='button one' text='Explore Courses' />
        </section>
        <section className='section-sixth'>
          <h2>H2 heading module</h2>
          <Row className='items'>
            <Col sm={12} lg={4}><InfoCard2 /></Col>
            <Col sm={12} lg={4}><InfoCard2 /></Col>
            <Col sm={12} lg={4}><InfoCard2 /></Col>
          </Row>
          <Button className='button one' text='Explore Courses' />
        </section>
      </main>
      <Footer/>
    </>
  )
}
