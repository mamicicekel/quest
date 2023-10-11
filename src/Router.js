import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Courses from './pages/Courses/Courses'
import Course from './pages/Course/Course'
import Teachers from './pages/Teachers/Teachers'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='courses' element={<Courses/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='course' element={<Course/>}/>
      <Route path='teachers' element={<Teachers/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default Router;
