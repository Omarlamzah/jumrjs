import Navbar from './navbar/Navbar.js';
import Home from './home/Home.js';
import Programmes from './programmes/Programmes.js';
import Whyus from './whyus/Whyus.js';


import './bootstrap.min.css';
import './js.js';
import About from './Aboutus/About.js';
import Footer from './footer/Footer.js';
import Contact from './Contact/Contact.js';



function App() {

  return (
   
<div>
    <Navbar/>
     <Home/>
     <Programmes/>
    < Whyus/>
    < About/>
    <Contact/>
    <Footer/>

</div>
  )

}

export default App;
