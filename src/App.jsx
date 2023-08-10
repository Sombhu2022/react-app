import Home from './components/home'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Nav from './components/nav.jsx'
import Slider from './components/slider.jsx'
import Loding from './components/loding.jsx'
import './style/app.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

 

  return (
   <>
    <BrowserRouter>
       
    <Routes>
      <Route path='/loading' element={<Loding/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    <Nav/>
    <Slider/>
    <div className="App">
      <div className="home" id='home'><Home/></div>
      <div className="about" id='about'>   <About/></div>

      <div className="contact" id='contact'><Contact/></div>

      <header className="App-header">
       
      </header>
    </div>
    </BrowserRouter></>
  );
}

export default App;
