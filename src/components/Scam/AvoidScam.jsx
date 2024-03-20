import React from 'react'
import './Scam.css';
function AvoidScam(props) {
  return (
    <>
      <div className='sec-con'>
    <div div className="con2-title">
      <h3>What you can do to avoid a scam</h3>
    </div>
    <div class="con3">
      <div class="box">
        
          <img className='ser-img ' src={props.block} alt="block" />
          <h3>Never visit links sent by drivers</h3>
          <p>Some fake drivers could try to make you pay outside our app by sending a link, a phone number or an email address.</p>
      </div>
      <div class="box">
          <img className='ser-img' src={props.coins} alt="coins" />
          <h3>For cash-only rides, always pay in the car</h3>
          <p>Scammers are getting increasingly sophisticated in their attempts to get your money or payment details. Always pay in cash, in the car, upon departure.</p>
      </div>

      <div class="box">
        <img className='ser-img' src={props.leftquote} alt="quote" />
        <h3>Only pay the service fee on our app.</h3>
        <p>Even if the website sent by fake drivers looks like BlaBlaCar’s, do not transfer money outside our app.</p>
      </div>
    </div>
  </div>
    </>
  )
}

export default AvoidScam
