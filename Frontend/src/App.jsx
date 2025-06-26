import { Route } from 'react-router-dom';
import './App.css'
import Blogs from './components/Blogs'
import CourseSyllabus from './components/CourseSyllabus'

import { BrowserRouter as Router, Routes } from "react-router-dom";
import Videos from './components/Videos';
import PodcastPage from './components/PodcastPage';
import CurrentAffairs from './components/CurrentAffairs'
import NewsDetail from './components/NewsDetail';
import AfterLogin from './components/AfterLogin';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/LeaderBoard';
import LandingPage from './components/LandingPage';
import ContestPage from './components/ContestPage';
import CourseDetails from './components/CourseDetails';









function App() {


  return (
    <Router>
      <Routes>
      <Route path='/' element={<LandingPage />} />
        <Route path='/courseSyllabus' element = {<CourseSyllabus />} />
        <Route path='/afterLogin' element={ <AfterLogin />} />
        <Route path='/dashboard' element={ <Dashboard />} />
        <Route path='/leaderBoard' element={<Leaderboard />} />
        <Route path='/blogs/:subject' element={<Blogs />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/podcasts' element={<PodcastPage />} />
        <Route path='/currentAffairs' element={<CurrentAffairs />} />
        <Route path='/currentAffairs/:id' element={ <NewsDetail />} />
        <Route path='/contest' element={<ContestPage />} />
        <Route path='/CourseEnroll' element={<CourseDetails />} />
        
      </Routes>
    </Router>
  )
}

export default App
