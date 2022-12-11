import React, { Component } from 'react'
import image4 from '../assets/image4.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image1 from '../assets/image1.png'




import './Whyus.css'

export default class Whyus extends Component {
  render() {
    return (
       <div id='whyus' className='wyus'>
                <img className='img1' src={image1}/>
                <section  className='galrs'>
                    <img  className="img2" src={image2}/>
                    <div className='toimag'>
                    <img className='img3' src={image3}/>
                    <img className='img4' src={image4}/>
                    </div>    
                </section>


                <section className='infous'>
                    <h6>SOME REASONS</h6>
                     <h4>why shoose us ?</h4>

                     <ul>
                        <li>over 100+ expert coachs</li>
                        <li>TRAIN SMARTER AND THAN BEFORE</li>
                        <li>1 FREE PROGRAM FOR NEW MEMBER</li>
                        <li>RELIABLE PARANERS</li>
                        
                     </ul>
                </section>

      </div>
    )
  }
}
