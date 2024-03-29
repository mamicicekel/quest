import React from 'react'
import './About.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'
import CounteCard from '../../Components/Cards/CountCard/CountCard'
import Women from '../../assets/images/women.png'
import TouristAttraction from '../../assets/images/tourist-attraction.jpg'

import { Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <div>
      <Header />
      <main className='main-about'>
        <section className='section-first'>
          <Row>
            <Col sm={12} lg={6}>
              <h1>
                The big mission behind Education
              </h1>
              <div className='buttons'>
                <Button className='button one' text='Join Our Team' />
                <Button className='button one' text='Button' />
              </div>
            </Col>
            <Col sm={12} lg={6} className='right-group'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium pulvinar ac molestie cursus malesuada enim. Massa nec tellus, elit tellus, erat faucibus aenean. Nunc, lacus, dignissim nec sit.</p>
            </Col>
          </Row>
        </section>
        <section className='section-second'>
          <h2>A few numbers that we are proud of</h2>
          <Row className='items'>
            <Col sm={12} lg={4}><CounteCard text='100,000+' /></Col>
            <Col sm={12} lg={4}><CounteCard text='5,000+' /></Col>
            <Col sm={12} lg={4}><CounteCard text='75.000+' /></Col>
          </Row>
          <Button className='button one' text='Explore Courses' />
        </section>
        <section className='section-third'>
          <Row>
            <Col sm={12} lg={6}>
              <img src={TouristAttraction} />
              <h2>Lorem ipsum dolor sit, consectetur.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus viverra praesent felis consequat pellentesque turpis et quisque platea. Eu, elit ut nunc ac mauris bibendum nulla placerat. Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed euismod laoreet urna, feugiat et. Euismod sem purus rutrum in. Tortor varius a bibendum nisl et tellus. Aliquet elit senectus iaculis netus gravida.</p>
              <Button className='button one' text='Button' />
              <Button className='button one' text='Button' />
            </Col>
            <Col sm={12} lg={6}>
              <h2>Lorem ipsum dolor sit, consectetur.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus viverra praesent felis consequat pellentesque turpis et quisque platea. Eu, elit ut nunc ac mauris bibendum nulla placerat. Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed euismod laoreet urna, feugiat et. Euismod sem purus rutrum in. Tortor varius a bibendum nisl et tellus. Aliquet elit senectus iaculis netus gravida.</p>
              <Button className='button one' text='Button' />
              <Button className='button one' text='Button' />
              <img src={Women} />
            </Col>
          </Row>
        </section>
        <section className='section-fourth'>
          <Row>
            <Col sm={12} lg={6}>
              <div className='left-group'>
                <h2>H2 Heading Module</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.</p>
                <Button className='button one' text='Button' />
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <div className='right-group'>
                <Row>
                  <Col xs={1} sm={1} lg={1}>
                    <div className='timeline'>
                      <div className='timeline-circle'>&#9679;</div>
                      <div className='timeline-circle'>&#9679;</div>
                      <div className='timeline-circle'>&#9679;</div>
                      <div className='timeline-circle'>&#9679;</div>
                    </div>
                  </Col>
                  <Col xs={11} sm={11} lg={11}>
                    <div className='infos-box'>
                      <div className='infos'>
                        <div className='year'>
                          <p>2023</p>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor .</p>
                      </div>
                      <div className='infos'>
                        <div className='year'>
                          <p>2023</p>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor .</p>
                      </div>
                      <div className='infos'>
                        <div className='year'>
                          <p>2023</p>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor .</p>
                      </div>
                      <div className='infos'>
                        <div className='year'>
                          <p>2023</p>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor .</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </section>
      </main>
      <Footer />
    </div>
  )
}
