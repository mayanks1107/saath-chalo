import './RideConfirmation.css'
import Feedback from '../Feedback/Feedback'
import tick from '../../assets/tick.gif'
import {useLocation } from "react-router-dom";
import Payment from '../Payment/Payment';

function RideConfirmation() {
  let location = useLocation() 

 

  return (
    <div className="thankyou-page">
      <div className="_header">
        <div className="logo">
          <img src={tick} alt="" />
        </div>
        <h1>Ride Confirmed </h1>
      </div>
      
      <div className="_body">
        <div className="_box">
          <h2 className='media-thank-h2'>
            Your contribution to <strong>reducing emissions </strong> and <strong> traffic congestion </strong> is appreciated.
          </h2>

          <p>
          Your ride has been <strong>successfully</strong> booked. 
          <br/>To confirm your booking and proceed with payment, please click the button below.
          </p>
     
         <Payment/>
        </div>
      </div>
      
      <div className='gap'/>
      <div className='gap'/>
    </div>
  )
}

export default RideConfirmation
