import React from 'react'
import './CourseCard.css'
import { Row, Col } from 'react-bootstrap'

export default function CourseCard({image, title}) {
  return (
    <div className='course-card'>
        <Row>
            <Col sm={12} lg={6}>
                <img src={image}/>
            </Col>
            <Col sm={12} lg={6}>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.</p>
            </Col>
        </Row>
    </div>
  )
}
