import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'
import home1 from '../image/home1.png'
import home2 from '../image/home2.png'
import home3 from '../image/home3.png'
import Footer from '../Footer'
import Accordion from '../Accordion'


function LoginScreen() {

  const [signIn, setSignIn] = useState(false) 

  return (
      <div className="loginScreen">
        <div className= "loginScreen__background">
          <img
            className="loginScreen__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""
          />
          <button 
            onClick={() => setSignIn(true)}                 
            className="loginScreen__button"
            >
            Sign In
          </button>

          <div className="loginScreen__gradient"/>
        </div>

        <div className="loginScreen__body">
          {/* Conditional rendering */}
          {/* If we click the sign in button, we want to render the SignInScreen component, if not render the get started component */}
          {signIn ? (
            <SignUpScreen/>
          ) : (
            <>
              <h1>Unlimited films, TV Programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership</h3>

              <div className = "loginScreen__input">
                <form>
                  <input 
                    type='email' 
                    placeholder="Email Address"
                  />
                  <button onClick={() => setSignIn(true)} className="loginScreen__getStarted"> 
                    GET STARTED 
                  </button>
                </form>
              </div>

              <div className="loginScreen__items">
                <span className="greySpan"/>
                <div className="loginScreen__itemA">
                  <div className="item--description" >
                    <h1>Enjoy on your TV.</h1>
                    <p> Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </p>
                  </div>
                  <img className="item--img" alt="" src={home1} ></img>
                </div>
                <span className="greySpan"/>
                <div className="loginScreen__itemB">
                  <div className="item--description">
                    <h1>Download your programmes to watch offline.</h1>
                    <p> Save your favourites easily and always have something to watch. </p>
                  </div>
                  <img className="item--img" alt="" src={home2}></img>
                </div>
                <span className="greySpan"/>
                <div className="loginScreen__itemC">
                  <div className="item--description">
                    <h1>Watch everywhere.</h1>
                    <p> Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more. </p>
                  </div>
                  <img className="item--img" alt="" src={home3}></img>
                </div>
                <span className="greySpan"/>
              </div>

              {/* Accordian Component */}
              <Accordion/>

              {/* Get Started Component */}
              
              {/* Footer Component */}
              <Footer/>
            </>
          )}
        </div>
      </div>
  )
}

export default LoginScreen
