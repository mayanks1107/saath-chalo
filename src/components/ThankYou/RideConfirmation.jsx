import { useEffect,useState } from 'react';
import './RideConfirmation.css'
import Feedback from './Feedback'
import tick from '../../assets/tick.gif'
import {useNavigate, useLocation } from "react-router-dom";
import { Server } from '../Server/Server';
function RideConfirmation() {
  let location = useLocation() 
  // let RiderName = location.state.RiderName;
  // let RiderEmail = location.state.RiderEmail;
  // let SourcePlace = location.state.SourcePlace;
  // let DestinationPlace = location.state.DestinationPlace;
  // let VehicleNumber = location.state.VehicleNumber;

  const [RiderInfo, setRiderInfo] = useState();
  // useEffect(() => {
  //   const getRiderInfo = async () => {
  //     const url = `${Server}/tripdet/getRider/${RiderEmail}`;
  //     const response = await fetch(url, {method: 'GET', headers: {'Content-Type': 'application/json'}});
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data[0]);
  //       setRiderInfo(data[0]);
  //     }
  //   }
  //   getRiderInfo();
  // },[])
  console.log(location.state);
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
{/* 
          <p><strong>Rider's Name: {RiderName.toUpperCase()} </strong></p>
          <p><strong>Source:  {SourcePlace.charAt(0).toUpperCase() +SourcePlace.slice(1)}</strong></p>
          <p><strong>Destination: {DestinationPlace.charAt(0).toUpperCase() + DestinationPlace.slice(1)} </strong></p>
          <p><strong>Vehicle Number: {VehicleNumber} </strong></p> */}

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

export default RideConfirmation
