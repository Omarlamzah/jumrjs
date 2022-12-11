import React, { Component } from 'react'
import './About.css'
import timage1 from  '../assets/t-image1.png'
import timage2 from  '../assets/t-image2.jpg'
import timage3 from  '../assets/t-image3.jpg'
import leftArrow from  '../assets/leftArrow.png'


export default class About extends Component {
  render() {


var index=0;

const lespar=[
  "i am fullstack develope i have over than 3 years of experiences in this domen and i love this whol about coding",
  "i am fullstack develope i have over than 3 years of experiences in this domen and i love this whol about coding",
  "i am fullstack develope i have over than 3 years of experiences in this domen and i love this whol about coding",

]
const names=[
  "<p id='nameco'><span className='spanc'>omar lamyah</span> coach in coding</p>",
  "<p id='nameco'><span className='spanc'>hassan coaches</span> coach in coding</p>",
  "<p id='nameco'><span className='spanc'>jon weak</span> coach in coding</p>",

]

const switchcoachesnext=()=>{
  var para = document.getElementById("para")
  var nameco = document.getElementById("nameco")
  var coimg = document.getElementById("coimg");
  index=index+1
  if(index==4){
    index=3
  }
if(index==1){
para.innerHTML=lespar[index-1]
nameco.innerHTML=names[index-1]
coimg.setAttribute("src",timage1)
  return
}
if(index==2){
  para.innerHTML=lespar[index-1]
  nameco.innerHTML=names[index-1]
  coimg.setAttribute("src",timage2)

  return
}
if(index==3){
  para.innerHTML=lespar[index-1]
  nameco.innerHTML=names[index-1]
  coimg.setAttribute("src",timage3)
console.log(index)
  return
}





}
const switchcoachesprev=()=>{
  var para = document.getElementById("para")
var nameco = document.getElementById("nameco")
var coimg = document.getElementById("coimg");


  index=index-1
  if(index==0){
    index=1
  }
if(index==1){
    
para.innerHTML=lespar[index-1]
nameco.innerHTML=names[index-1]
coimg.setAttribute("src",timage1)

  return
}
if(index==2){
  para.innerHTML=lespar[index-1]
  nameco.innerHTML=names[index-1]
  coimg.setAttribute("src",timage2)

  return
}
if(index==3){
  para.innerHTML=lespar[index-1]
  nameco.innerHTML=names[index-1]
  coimg.setAttribute("src",timage3)

  return
}





}




    return (
      <div className='aboutus container'>

   <div>
   <h1 className='h1'>WHAT THEY</h1>
<h3 className='h3'>SAY ABOUT US</h3>
<p id='para'>i make this web site coause i love code codingi make this web site coause i love code coding i make this web site coause i love code coding i make this web site coause i love code coding i make this web site coause i love code coding</p>
<p id='nameco'><span className='spanc'>omar lamyah</span> coach in coding</p>
     
   </div>


<div className='swtchimg'>
    <img onClick={switchcoachesprev} id='rigthicon' className='rightimg' src={leftArrow}/>
    <img onClick={switchcoachesnext} id='lefthicon' className='leftimg' src={leftArrow}/>
</div>

<div>
    <div></div>
    <div></div>
    <img className='imgcos' id='coimg'  src={timage3}/>

</div>

      </div>
    )
  }
}
