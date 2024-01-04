import React from 'react'
import Header from './Header/headers'
import "../components/bookRide.css"
import Footer from './Footer/Footer'
import Sourcepic from '../assets/source.png'
import RiderPic from '../assets/man.png'
import ChatPic from '../assets/chat.png'
import Flash from '../assets/flash.png'
import ArrowDownImage from '../assets/arrow-down.png'
import Departurepic from '../assets/departure.png'

function bookRide() {
  return (
    <>
      <Header />
      <div className="bookHeading">Book Your Ride</div>
      <p className='dateText'> Sun, 17 December</p>
      <div className='source'>
        <h5><strong>Rzw 277, Mahipalpur - Rangpuri Rd, New Delhi, Delhi</strong></h5>
        <p>New Delhi</p>
        <img src={Sourcepic} alt="" className="sourceImage" />
        <p className='sourceDistanceText'>17 km from your departure</p>

      </div>
      <div >
        <img className='sourceToDestinationImage' src={ArrowDownImage} alt="" />
      </div>
      <div className='destination'>
        <h5><strong>Chandigarh Bus Terminus, ISBT Road, 17G, 17F, Sector 17</strong></h5>
        <p>Chandigarh</p>
        <img src={Departurepic} alt="" className="destinationImage" />
        <p className='destinationDistanceText'>257 m from your arrival</p>

      </div>
      <div className="breakAsBorder"></div>
      <div className='pricePerPerson'>
        <h3>Total price for 1 passenger</h3>
        <p>💲600</p>
      </div>
      <div className="breakAsBorder"></div>

      <div className="riderDetails">
        <img src={RiderPic} alt="" />
        <h4 >Justin Krishtoper</h4>

      </div>

      <div className="breakAsBorder1"></div>

      <div className="askQues">
        <img src={ChatPic} alt="" />
        <p>Ask Rider a question</p>
      </div>

      <div className="breakAsBorder1"></div>

      <div className="askQues">
        <img src={Flash} alt="" />
        <p>Your booking will be confirmed instantly.</p>
      </div>

      <div className="breakAsBorder1"></div>

      <div className="vehicleInfo">
        <h4>HYUNDAI AURA</h4>
        <p>white</p>
      </div>

      <div className="bottomLine"></div>

      <div className="bookButton">
        <img src={Flash} alt="" />
        <p>Book</p>
      </div>
      

      <Footer className="foot"/>
    </>

  )
}

export default bookRide