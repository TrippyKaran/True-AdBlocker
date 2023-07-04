import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import AboutUS from './pages/AboutUs';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <div className='app'>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/about-us' element={<AboutUS/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
  </Routes>
  </div>
  );
}

export default App;
