import React, { useEffect, useState,useRef } from "react";
import Headers from "../Header/headers";
import axios from 'axios'
import {Server} from "../Server/Server"
import "./RideFeed.css";
import FeedCard from "./FeedCard";
import { toast, Toaster } from "react-hot-toast";


import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
export default function RideFeed(){
    // const [RiderInfo,setRiderInfo] = useState([]);
    const [riderInfo, setRiderInfo] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
    const Riderhandle = async () => {
        try {
            const url = `${Server}/tripdet`;
            // const url =`http://localhost:4000/tripdet`
            // const url =`http://localhost:4000/tripdet`
            const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
            setRiderInfo(data);
            // console.log(riderInfo);
        } catch (error) {
            console.error('Error fetching rider data:', error);
        }
    };
    Riderhandle()
   },[]) 
// console.log(RiderInfo.length);
// console.log(RiderInfo);
const CheckData =()=>{
    if(localStorage.getItem("token")!=null){
      JSON.parse(localStorage.getItem("token"))
    //   setRiderInfo(localStorage.getItem("token"))
        
    }else{
        toast.error("Not Found");
        navigate('/login');  
    }
}
useEffect(()=>{
    CheckData()
   },[]) 

   console.log(riderInfo.length);

    return(
        <div className="rFeed">
            <Headers/>
            
            <div className="form-submit">
                <input className="inp input-from" type="text" placeholder="from" name="from"/>
                <input className="inp input-to" type="text" placeholder="to" name="to"/>
                <input className="inp input-to" type="date" placeholder="date" name="date"/>
                <input className="inp input-to" type="number" placeholder="number" name="number"/>
                <button className="inp search-form btn btn-primary">Search</button>
                
            </div>
            <h2 className="text-feed">Today</h2>
            <div className="cards-left">

                {riderInfo.map((info) => (
                    <FeedCard key={info.id} {...info} />
                ))}


            </div>
            <div className = "right">
                <h4 className="h2-sort">Sort By</h4>
                <h5 className="h3-clear">Clear all</h5>
                <p className="right-p dep">Earliest Departure</p>
                <input className="rad dep-rad" type="radio"/>
                <p className="right-p low">Lowest price</p>
                <input className="rad low-rad" type="radio"/>
                <p className="right-p close-dep">Close to Departure</p>
                <input className="rad close-dep-rad" type="radio"/>
                <p className="right-p close-arr">Close to arrival</p>
                <input className="rad close-arr-rad" type="radio"/>
                <p className="right-p short-ride">Shortest ride</p>
                <input className="rad short-ride-rad" type="radio"/>
                <div className="sep-top" style={{width: 397.33, height: 8, background: '#EDEDED', borderRadius: 16}} />
                <h4 className="h2-departure">Departure time</h4>
                
                <p className="p-before-6">Before 06:00</p>
                <div className="sq-6" style={{width: 13, height: 13, background: 'white', borderRadius: 2.50, border: '1px #767676 solid'}} />
                <p className="p-6-12">06:00 to 12:00</p>
                <div className="sq-6-12" style={{width: 13, height: 13, background: 'white', borderRadius: 2.50, border: '1px #767676 solid'}} />
                <p className="p-12-8">12:01 to 18:00</p>
                <div className="sq-12-18" style={{width: 13, height: 13, background: 'white', borderRadius: 2.50, border: '1px #767676 solid'}} />
                <p className="p-after-18">After 18:00</p>
                <div className="sq-after-18" style={{width: 13, height: 13, background: 'white', borderRadius: 2.50, border: '1px #767676 solid'}} />

                <div className="sep-btm" style={{width: 397.33, height: 8, background: '#EDEDED', borderRadius: 16}} />
                <h3 className="h3-trust">Trust and Safety</h3>
            </div>
            <div className="foot">
            <Footer/>
            </div>
        </div>
    )
}


{/* <tr key={info._id}>
<div className="fCard">
    <div class="card carda">
      <div class="card-body">
        <h5 class="card-title from">{info.SourcePlace}</h5>
        <hr id="myhr"></hr>
        <h5 class="card-title to">{info.DestinationPlace}</h5>
        <p class="card-text price">{"56"}</p>
        <p class="card-text price">₹{props.price}.00</p>
        <p class="card-text strt">{info.typeOfTript}</p>
        <p class="card-text end">{info.timeOfTrip}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        <img className = "pic" src = {pic} alt = "profile pic"/>
        <p class="card-text name">{info.PhoneNumber}</p>
        <p class="card-text rating">{info.availableSeat}⭐</p>
      </div>
    </div>
</div>
</tr> */}