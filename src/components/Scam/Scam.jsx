import React from 'react'
import './Scam.css'
import image from '../../assets/scam.png'
import leftquote from "../../assets/left-quote.png";
import block from "../../assets/block.png";
import coins from "../../assets/dollar.png";
import { FcDisclaimer } from "react-icons/fc";
import { FaExclamationTriangle } from "react-icons/fa";
import { ReactSVG } from 'react-svg'
function Scam() {
  return (
    <>
    <div class="container">
        <div class="image">
        <img  className='Scam-image' src={image} alt="Image"/>
        </div>
        <div class="text">
        <p>Help us keep you safe from scams</p>
    </div>
</div>
  <div className='sec-con'>
    <div div className="con2-title">
      <h3>How can you stay away from the scam?</h3>
    </div>
    <div class="con3">
      <div class="box">
          <img className='ser-img' src={block} alt="block" />
          <h3>Never click on links that drivers provide you.</h3>
          <p>If a phony driver sends you an email address, phone number, or link, they may attempt to get you to pay outside of our app.</p>
      </div>
      <div class="box">
          <img className='ser-img' src={dollar} alt="coins" />
          <h3>Always pay for rides that require cash in the car.</h3>
          <p>Scammers are becoming more crafty in their attempts to obtain your money or payment information. When you leave the car, always pay with cash.</p>
      </div>

      <div class="box">
        <img className='ser-img' src={leftquote} alt="quote" />
        <h3>Just use our app to pay the service cost.</h3>
        <p>Do not send money via a website other than SaatChalo, even if it appears to be authentic.</p>
      </div>
    </div>
  </div>

  <div className='con4'>
        <div className='con4-header' >
            <h1>How scammers attempt to obtain your financial information.</h1>
        </div>
        <div className='con4-body'>
            <div className='con4-box'>
                <FaExclamationTriangle size={"15em"} />
                <h5>By creating a spoof website that mimics SaathChallo</h5>
                <div>
                  <p>Scams are successful because they give the impression of authenticity. Scammers will try to fool you into visiting a website that looks a lot like ours as they get more skilled in order to steal your money or payment details.</p>
                  <p>Verify that you're always making payments via the SaathCallo app or website.</p>
                </div>
                
            </div>
              <div className='con4-box'>
                  {/* <img src="" alt="profile alert" /> */}
                  <FcDisclaimer size={"15em"} />
                  <h5>By fabricating online profile.</h5>
                  <p>Fake profiles typically haven't had any ratings from other members and were made a few days or hours ago. They frequently charge less than other comparable rides as well. They may attempt to get in touch with you via your phone or WhatsApp before or after you book the journey, if they don't use our platform.</p>
                  <p>You can report an alleged interaction with a phony profile.</p>
              </div>
          </div>
    </div>

    <div>

            <div>
                <h1>How to react if you believe someone is attempting to defraud you</h1>
                <div>
                    <h5>If the driver gives you a link to complete the ride payment process</h5>
                    <p>You can reply, "I'm not comfortable using the link you sent. Instead, I'll pay you in cash in the car as suggested by SaathChalo."</p>
                </div>
                <div>
                    <h5>In the event that the driver demands payment in advance</h5>
                    <p>You may reply, "Don't worry, I'll pay in the car on the day of departure." I'd rather not make payments online.</p>
                </div>
                <div>
                    <h5>If the driver requests more money from you</h5>
                    <p>"I have already paid the service fee on SaathChalo's app, and I will pay in cash upon departure" is one way you can reply.</p>
                </div>
            </div>
            <div>
                <h1>Seen anything unusual? Report it.</h1>
                <p>Help us protect you from scams by reporting if you notice a suspicious message, if you have been scammed or if you think someone is trying to scam you.</p>
                <p>Report a scam</p>

            </div>

    <div className='con5-box'>
                <h1>Online security tips</h1>
                <div>
                    <h5>Password quality</h5>
                    <p>Your password should be at least 8 characters with a mix of at least 1 letter, 1 number, and 1 special character (e.g. #, @, &). Having complex and unique passwords on all your accounts, not just your BlaBlaCar account, will greatly reduce the chances of having security issues.</p>
                </div>
                <div>
                    <h5>Online safety</h5>
                    <p>Here are some pointers to help you be safe when using the internet:
• Look for "🔒" and "https://" at the start of a website: This indicates that your connection is safe.
• Verify whether the URL points to the SaathChalo website: Even though a link in a message appears legitimate, it's a scam if the URL doesn't point to the official website, https://www.saathChalo.com Check the complete URL of the page before entering your payment or login details.
• Just use your gadget: Don't set up accounts or enter passwords on non-personal devices, such as a friend's phone or an internet café.
• Update your gadgets and software: These updates frequently include new security safeguards and address security vulnerabilities.</p>
                </div>
                <div>
                    <h5>Off-site payments and messages</h5>
                    <p>Some safety advice to remember when messaging other members: 
• Only swap on SaatChalo: Avoid exchanging before making a reservation on other platforms like WhatsApp or Messenger. 
• Protect your personal information: Never give out your phone number, email address, or payment information to someone before scheduling a ride. 
• Avoid clicking on links in messages: Never open a link or click on anything in dubious or unwanted messages received through third-party messaging apps or the SaatChalo network.</p>
                </div>
            </div>
  </div>
                
            
        



    </>
  )
}

export default Scam
