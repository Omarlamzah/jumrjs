import React, { Component } from 'react'
import logo from '../assets/adidas.png'
import menuimg from '../assets/menu.png'
import menuimgclose from '../assets/closeicon.png'
import './Navbar.css'


export default  class navbar extends Component {


  


  render() {
    var x=true
    const togglemenu =()=>{
      
      
       if(x==true){
        document.getElementById("navtul").setAttribute("style","display:block");
        document.getElementById("navtme").setAttribute("style","display:block;textalignment;center");
        document.getElementById("btntogl").setAttribute("src",menuimgclose); 
        x=false
        return
       }
      else {
        document.getElementById("navtul").setAttribute("style","display:none");
        document.getElementById("btntogl").setAttribute("src",menuimg); 
        x=true
        
       }
      
      

    }


    return (
      <div id='navtme' className='navbar'>
        
            
        <img src={logo}/>


        <img id='btntogl' onClick={togglemenu} className='menuimg' src={menuimg}/>
        <ul id='navtul' className="nav navbtgl justify-content-center">
            <li className="nav-item">
                <a className="nav-link active links" href="#home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link links" href="#programes">programes</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active links" href="#whyus">Why us</a>
            </li>

            <li className="nav-item">
                <a className="nav-link active links" href="#contact">contact</a>
            </li>

            <li className="nav-item">
                <a className="nav-link active links" href="#about">about us</a>
            </li>
        </ul>
      </div>
    )
  }
}
