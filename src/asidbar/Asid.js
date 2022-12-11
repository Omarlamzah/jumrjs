import React, { Component } from 'react'
import './Asid.css'
import heart from  '../assets/heart.png'



export default class  asid extends Component {
  render() {
    return (
      <div className='asidbar'>


           <div className='heartrate'>
            <img src={heart}/>
            <p>heart rate</p>
            <h5>116bpm</h5>
            </div>  

      </div>
    )
  }
}
