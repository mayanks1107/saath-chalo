import './PaymentConfirmation.css'
import Feedback from '../Feedback/Feedback'
import tick from '../../assets/tick.gif'
import { useLocation } from "react-router-dom";
import Map from '../../MapsComponents/Home';

function PaymentConfirmation() {
  let location = useLocation()

  const PaymentPaid = location.state.PaymentPaid;
  return (
    <>
      <div className="thankyou-page">
        <div className="_header">
          <div className="logo">
            <img src={tick} alt="" />
          </div>
          {PaymentPaid ?<h1>  Payment Confirmed </h1> : <h1> Ride Confirm  Pay Later To driver </h1>}
        </div>

        <div className="_body">
          <div className="_box">
            <Map />
          </div>
        </div>
        <div className='gap' />
        <div className='gap' />
        <Feedback />
      </div>


    </>
  )
}

export default PaymentConfirmation
