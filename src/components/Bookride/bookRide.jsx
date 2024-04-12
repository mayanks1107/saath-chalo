import React, { useEffect, useState } from "react";
import Headers from '../Header/headers';
import './bookRide.css'
import Footer from "../Footer/Footer";
// import { FaMessages, FaMugHot } from "react-icons/fa";
import {useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Server } from "../Server/Server";
import { toast, Toaster } from "react-hot-toast";
export default function BookRide(){
  
  let location = useLocation() || undefined;
  let navigate = useNavigate();
console.log(location.state.list[0]);
  const [lazy, setlazing] = useState(false);
  const date =location.state.list[0].dateOfTrip  || null;
  const SourcePlace = location.state.list[0].SourcePlace;
  const DestinationPlace = location.state.list[0].DestinationPlace;
  const FullName = location.state.list[0].FullName;
  const Distance = location.state.list[0].Distance;
  const PhoneNumber=location.state.list[0].PhoneNumber;
  const Price= location.state.list[0].Price;
  const VehicleName= location.state.list[0].VehicleName;
  const VehicleNumber = location.state.list[0].VehicleNumber;
  const timeOfTrip  = location.state.list[0].timeOfTrip;
  const VehicleDolour = location.state.list[0].VehicleColour
  
  const bookCab = async() => {
   let RiderEmail = location.state.list[0].Email;
   let UserEmail = JSON.parse(localStorage.getItem("token")).Email;
   console.log("UserEmail " +UserEmail+" Cab Booked Successfully")
   const url = `${Server}/passenger/update/${UserEmail}`;
   // This Line will update Rider Email Id in Passenger Schema 
   const res =  await axios.put(url, {RiderEmail: RiderEmail});

  if(res.data.success === true){
    if(res.data.message === "Booking"){
      toast.success("Booking request is generated");

      try {
        const url1 = `${Server}/passenger/approval/${UserEmail}`;
        const response = await fetch(url1, {method: 'GET', headers: {'Content-Type': 'application/json'}});
      if (response.ok) {
          const data = await response.json();
          console.log(data);
          console.log("this is rider Email "+data.Approval);
          
          if(data.Approval ==="Not_Assigned"){
            setlazing(true);
          console.log("Cab Not Assigned");
        }
    

    if(data.ConfirmRide){
      
      navigate('/thankyou',{state:{ RiderName:FullName,RiderEmail:RiderEmail,SourcePlace:SourcePlace,DestinationPlace:DestinationPlace,VehicleNumber:VehicleNumber}});
    }
    if(data.RejectRide){
      alert("Cab Rejected");
    }

}

      } catch (error) {
        
      }
    }
  }else{
    toast.error("Cab Not Booked");
  }
  const RejectCab = () => {
    alert("Cab Rejected")
  } 
}
const getPassenger = async () => {
  let UserEmail = JSON.parse(localStorage.getItem("token")).Email;
  let RiderEmail = location.state.list[0].Email;
  
  const url1 = `${Server}/passenger/approval/${UserEmail}`;
  
  const response = await fetch(url1, {method: 'GET', headers: {'Content-Type': 'application/json'}});
  if (response.ok) {
    const data = await response.json();
    console.log(data.RiderEmail);
  if(RiderEmail ==="Not Assigned "){
    console.log("Cab Not Assigned");
  }
    console.log(data.ConfirmRide);
    

    if(data.ConfirmRide){
      
      navigate('/thankyou',{state:{ RiderName:FullName,RiderEmail:RiderEmail,SourcePlace:SourcePlace,DestinationPlace:DestinationPlace,VehicleNumber:VehicleNumber}});
    }
    if(data.RejectRide){
      alert("Cab Rejected");
    }

    
  }
}  
useEffect(() => {
 console.log(lazy)
})

  return(
    <div className="book-ride">
      <Headers/>  
      <Toaster toastOptions={{ duration: 6000 }} />    
      
      {/* <div className="dot-up"  /> */}
      {/* <div className="dot-down" style={{width: 10, height: 10, background: 'white', borderRadius: 9999, border: '1px #054652 solid'}} /> */}
     <div className="color-div">
     <h1 className="b-r-h1">{date}</h1>
      <div className="top-card">
      
        
        {/* <h4 className="strt-src"></h4> */}
        <p className="src-state">{SourcePlace}</p>
        <hr className="hr-vertical"/>
        
        <h4 className="dest">{Distance}</h4>
        <p className="strt-time">{timeOfTrip}</p>
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
        <p className="color-p">{VehicleDolour}</p>
      </div>
      <div className="bottom-card-book">
        <hr className="rule"></hr>
        <button className="book-book btn btn-primary" onClick={()=>bookCab()}>Book⚡</button>
      </div>
      {/* <button  onClick={()=>getPassenger()}>dhyf</button> */}
      </div>
      {/* <button onClick={()=>props.Bookride(props._id)}>Accept⚡</button> */}
      <div className="foot-book">

        <Footer/>
      </div>
    </div>
  )
}