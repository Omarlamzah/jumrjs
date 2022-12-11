import React, { Component } from 'react'
import './Home.css'
import homimg1 from '../assets/hero_image.png'
import homimg2 from '../assets/hero_image_back.png'
import calories from '../assets/calories.png'

import Asid from '../asidbar/Asid.js';




export default class home extends Component {
  render() {
    return (
      <div id='home' className='home'>
                        <Asid/>

                <div>
                    <img className='imghero2 imgh' src={homimg2}/>
                    <img className='imghero imgh' src={homimg1}/>
                </div>


                <div className='thtitle'>
                    <p><span className='thebest'>THE BESST</span> FITNESS CLUB IN THE TOWN</p>
                </div>

                <div className='titleheader'>
                    <p><span className='firstT'>SHAPE</span> YOUR  IDEAL<br/> BODY</p>
                </div>

                <div className='para'>
                    <p>this a good plan for your body are ready to join us</p>
                </div>



                <section className='numbers'>
                    <div>
                        <h4>+201</h4>
                        <p>EXPERT COATHES</p>
                    </div>
                    <div>
                        <h4>+400</h4>
                        <p>MEMBER JOINED</p>
                    </div>
                    <div>
                        <h4>+904</h4>
                        <p>FITNESS PROGRAMES</p>
                    </div>

                    <div className='glr'>
                        <div><img src={calories}/></div>
                        <div><h4>220kcal</h4><p>expert</p></div>
                    </div>
                </section>


                <div className='inpts'>
                    <input className='btn btn-info' value="get started" type="submit"/>
                    <input className='btn btn-info' value="read more" type="submit"/>
                </div>




              


      </div>
    )
  }
}



