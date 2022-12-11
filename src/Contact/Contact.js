import React, { Component } from 'react'
//import emailjs from '@emailjs/browser';
import './Contact.css'


export default class Contact extends Component {
  render() {
    
   /* const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('Yservice_6fzfu29', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    */
 
     return (
      <div >
       <form >
      <article className="email-container">
   <h2 className="text-center"><span className="myname">send me an Email</span></h2>
   <div className="text-center">I AM vrey responsive to messages</div>

   <div className="content-email">
       <div className="name-email-input">
           <input className="inputstyle inputborder" placeholder="Name" name="user_name" type="text" id=""/>
           <input className="inputstyle inputborder" placeholder="Email" type="email" name="user_email" id=""/>

       </div>
       <div className="suject">
           <input className="inputstyle inputborder" placeholder="subject" type="text" name="subject" id=""/>
       </div>
       <div>
           <textarea className="inputstyle txtarea inputborder" placeholder="message" name="message" id="" cols="30" rows="10"></textarea>
       </div>
<div className="sendcon"><input className="btnglobal limystylebox btnmargin" type="submit" value="send"/></div>

       
   </div>
</article>
      </form>
      </div>
   )
  }

}



