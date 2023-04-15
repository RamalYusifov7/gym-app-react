import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Footer, Navbar } from './components/index';
import { ExerciseDetail, Home } from './pages/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function App() {

  return (
    <Router>
      <Navbar />
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}


export default App
