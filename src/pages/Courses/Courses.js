import React, { useState } from 'react';
import './Courses.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import CourseCard from '../../Components/Cards/CourseCard/CourseCard';
import FatherAndSon from '../../assets/images/father-and-son.jpg'
import Nature from '../../assets/images/nature.jpg'
import Paper from '../../assets/images/paper.jpg'
import { Link } from 'react-router-dom';

export default function Courses() {

  const [filter, setFilter] = useState('');

  return (
    <div>
      <Header/>
      <main className='main-courses'>
        <div className='top'>
          <h2>All Courses</h2>
          <div>
            <span
              className={filter === 'All' ? 'selected-filter' : ''}
              onClick={() => setFilter('All')}
            >
              All
            </span>
            <span
              className={filter === 'Design' ? 'selected-filter' : ''}
              onClick={() => setFilter('Design')}
            >
              Design
            </span>
          </div>
        </div>
        <section className='courses'>
          <CourseCard image={FatherAndSon} title='Marketing Analytics 101'/>
          <CourseCard image={Nature} title='Marketing Analytics 101'/>
          <CourseCard image={Paper} title='Marketing Analytics 101'/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}