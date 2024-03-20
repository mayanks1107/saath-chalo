import React, { useEffect } from "react";
import Headers from '../Header/headers';
import './bookRide.css'
import Footer from "../Footer/Footer";
import { FaMessages, FaMugHot } from "react-icons/fa";
import { useLocation } from "react-router-dom";
export default function BookRide(){
  
  let location = useLocation() || undefined;
console.log(location.state.list[0]);

  const date =location.state.list[0].dateOfTrip  || null;
  const SourcePlace = location.state.list[0].SourcePlace;
  const DestinationPlace = location.state.list[0].DestinationPlace;
  const FullName = location.state.list[0].FullName;
  const Distace = location.state.list[0].Distance;
  const PhoneNumber=location.state.list[0].PhoneNumber;
  const Price= location.state.list[0].Price;
  const VehicleName= location.state.list[0].VehicleName;
  const timeOfTrip  = location.state.list[0].timeOfTrip;
  const VehicleColour = location.state.list[0].VehicleColour
  
  



  
  return(
    <div className="book-ride">
      <Headers/>      
      <h1 className="b-r-h1">{date}</h1>
      {/* <div className="dot-up"  /> */}
      {/* <div className="dot-down" style={{width: 10, height: 10, background: 'white', borderRadius: 9999, border: '1px #054652 solid'}} /> */}
      <div className="top-card">
      
        <p className="strt-time">{timeOfTrip}</p>
        <h4 className="strt-src"></h4>
        <p className="src-state">{SourcePlace}</p>
        <hr className="hr-vertical"/>
        
        <h4 className="dest">{Distace}</h4>
        <p className="dest-state">{DestinationPlace}</p>
      </div>
      <div className="mid-card-book">
        <div className="sep-top-book" style={{height: 8, background: '#EDEDED', borderRadius: 16}} />
        <h4 className="price-p">Total price for 1 passenger</h4>
        <h4 className="price-p-amount">{Price}</h4>
        <div className="sep-btm-book" style={{height: 8, background: '#EDEDED', borderRadius: 16}} />
      </div>
      <div className="info-card">
        <h5 className="info-p"><b>{FullName}</b> Phone no :- {PhoneNumber}</h5>
        <div className="sep-btm-info" style={{ height: 5, background: '#EDEDED', borderRadius: 16}} />
        <h5 className="ask-p">Ask {FullName} a question</h5>
        <div className="sep-btm-ask" style={{ height: 5, background: '#EDEDED', borderRadius: 16}} />
        <h5 className="car-type">{VehicleName}</h5>
        <p className="color-p">{VehicleColour}</p>
      </div>
      <div className="bottom-card-book">
        <hr className="rule"></hr>
        <button className="book-book btn btn-primary">Book⚡</button>
      </div>
      <div className="foot-book">
        <Footer/>
      </div>
    </div>
  )
}