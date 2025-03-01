import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (

    <>
      <div className='main'>
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          <div className="greet">
            <p><span>hello, Parker</span></p>
            <p>How can I help you today</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beutiful places to see on an upcomming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly Summarize this concept , urban planning </p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstrom team bonding activites for our work retreat</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Imporove the readabilty of the following code </p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>


          <div className="main-bottom">
            <div className="search-box">
              <input type="text" placeholder='Enter the prompt here' />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className='bottom-info'>
              <span>Tip:</span> You can also ask me to help you with your tasks by typing or speaking
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main