import './Footer.css'
import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div id='about' className='footer'>
        <p>read about us on</p>
         <ul>
            <li><a>facebook.com</a></li>
            <li><a>jumsite.com</a></li>
            <li><a>twtter.com</a></li>
            <li><a>linkden.com</a></li>
         </ul>
      </div>
    )
  }
}
