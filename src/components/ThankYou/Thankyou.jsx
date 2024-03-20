import './Thankyou.css'
import Feedback from './Feedback'
import tick from '../../assets/tick.gif'

function Thankyou() {

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

          <p><strong>Rider's Name: </strong></p>
          <p><strong>Source: </strong></p>
          <p><strong>Destination: </strong></p>
          <p><strong>Vehicle Number: </strong></p>

          <p>
            We hope you had a pleasant trip. Have a great day!
          </p>
        </div>
      </div>
      
      <div className='gap'>

      </div>
      <Feedback/>
    </div>
  )
}

export default Thankyou
