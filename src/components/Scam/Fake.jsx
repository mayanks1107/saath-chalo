import React from 'react'
import { FcDisclaimer } from "react-icons/fc";
import { FaExclamationTriangle } from "react-icons/fa";
import"./Scam.css"
function Fake() {
  return (
    <>
    <div className='con4'>
        <div className='con4-header' >
            <h1>How scammers try to get your money or payment details</h1>
        </div>
        <div className='con4-body'>
            <div className='con4-box '>
                <FaExclamationTriangle size={"10rem"} />
                <h5 className='fake-h5' >By building a fake website that looks like BlaBlaCar’s</h5>
                <div className='con4-contai front-size'>
                  <p className='fake-p'>Scams succeed because they look like the real thing. Scammers are getting smarter:
                  they will try to make you visit another website, very similar to ours, that will convince you to give them your money or payment details.</p>
                 <p className='fake-p'>Make sure you’re always paying on BlaBlaCar’s app or website.</p> 
                </div>
            </div>

              <div className='con4-box'>
                  {/* <img src="" alt="profile alert" /> */}
                  <FcDisclaimer size={"10rem"} />
                    <h5 className='fake-h5'>By creating fake user profiles</h5>
                  <div className='con4-contai front-size'>
                    <p className='fake-p'>Fake profiles are usually created just a few days or hours ago and don’t have any ratings from other members. They also often charge less than ‌other similar rides. Before or after booking the ride, they could try to contact you outside of our platform (through your phone or WhatsApp).</p>
                    <p className='fake-p'>If you think you interacted with a fake profile, you can report it.</p>
                  </div>
              </div>
          </div>
    </div>
      
    </>
  )
}

export default Fake
