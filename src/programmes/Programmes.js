import React, { Component } from 'react'
import './Programmes.css'
import './Programmes.css'
import dumbell from  '../assets/dumbell.svg'
import flame from  '../assets/flame.svg'
import heartHealth from  '../assets/heartHealth.svg'
import runing from  '../assets/runing.svg'



export default class programmes extends Component {
  render() {
    return (
      <div id='programes' className='programdiv'>
                   <h1>EXPLORER OUR <span className='progspan'>PROGRAMES</span> TO SHAPE YOU</h1>


                   <section>
                    <div >
                    <img src={dumbell}/>
                      <h4>tilte1</h4>
                      <p>lai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  su</p>
                    </div>


                    <div >
                    <img src={flame}/>
                      <h4>tilte 2</h4>
                      <p>lai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  su</p>
                    </div>

                    <div >
                    <img src={heartHealth}/>
                      <h4>tilte 3</h4>
                      <p>lai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  su</p>
                    </div>

                    <div >
                    <img src={runing}/>
                      <h4>tilte 4</h4>
                      <p>lai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  sulai auhs usus  su</p>
                    </div>


                     </section>
      </div>
    )
  }
}
