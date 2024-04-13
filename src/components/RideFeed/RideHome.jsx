import React, { useEffect, useState } from "react";
import Headers from "../Header/headers";
// import axios from 'axios'
import {Server} from "../Server/Server"
import "./RideFeed.css";
import FeedCard from "./FeedCard";
import { toast, Toaster } from "react-hot-toast";
// import pic from "../../assets/proflic-pic.png";
import Footer from "../Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
export default function RideHome(){
    // const [RiderInfo,setRiderInfo] = useState([]);
    const location = useLocation();
    const [SourcePlace,setSourcePlace] = useState(location.state.SourcePlace || null);
    const [DestinationPlace,setDestinationPlace ] = useState(location.state.DestinationPlace || null);
    const [dateOfTrip,setdateOfTrip] = useState(location.state.dateOfTrip); 
    const [riderInfo, setRiderInfo] = useState([]);
    const [available,setAvailable] = useState(true);
    const navigate = useNavigate();
    
    useEffect(()=>{
    const Riderhandle = async () => {
        try {
            // const url = `https://saatchalo.onrender.com/tripdet`;
            const url = `${Server}/tripdet/getpath`;
            
            const response = await fetch(url,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                SourcePlace:SourcePlace || "",
                DestinationPlace: DestinationPlace || "",
                dateOfTrip: dateOfTrip || ""
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            if(data.success){
                // setRiderInfo(data.query);
            setRiderInfo(data.query);
            }else{
                setAvailable(false);
                // toast.error("No Data Found");
            }
            console.log(riderInfo);
        } catch (error) {
            console.error('Error fetching rider data:', error);
        }
    };
    Riderhandle()
     // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]) 
  // To Handle the Paticular Card   
  function handleCard(id){
    console.log("hello");
    const newlist=riderInfo.filter(rider=> rider._id ===id);   
    navigate('/bookRide',{ state: { list:newlist} }); 
    
    
   }
   function OfferRide(){
    navigate('/createRide');
    // console.log("Offer Ride");    
   }


    return(
        <div className="rFeed">
            <Headers/>
            <Toaster toastOptions={{ duration: 16000 }} />
            {available === true &&
            <>
            <div className="form-submit">
                <input className="inp input-from" type="text" placeholder="from" name="from"/>
                <input className="inp input-to" type="text" placeholder="to" name="to"/>
                <input className="inp-media-from inp input-to" type="date" placeholder="date" name="date"/>
                <input className="inp input-to" type="number" placeholder="number" name="number"/>
                <button className="inp search-form btn btn-primary">Search</button>
                
            </div>
            <h2 className="text-feed">Today</h2>
            <div className = "right-ride-home">
            
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
                <div className="helper-media">
                <div className="sep-top" style={{width: 397.33, height: 8, background: '#EDEDED', borderRadius: 16}} />
                <h4 className="h2-departure">Departure time</h4>
                
                <p className="media-p p-before-6">Before 06:00</p>
                <div className="media-sq m-s-6 sq-6" style={{width: 13, height: 13, background: 'white', borderRadius: 2.50, border: '1px #767676 solid'}} />
                <p className="media-p p-6-12">06:00 to 12:00</p>
                <div className="media-sq m-s-6 sq-6-12" style={{width: 13, height: 13, background: 'white', borderRadius: 2.50, border: '1px #767676 solid'}} />
                <p className="media-p p-12-8">12:01 to 18:00</p>
                <div className="media-sq m-s-6 sq-12-18" style={{width: 13, height: 13, background: 'white', borderRadius: 2.50, border: '1px #767676 solid'}} />
                <p className="media-p p-after-18">After 18:00</p>
                <div className="media-sq m-s-6 sq-after-18" style={{width: 13, height: 13, background: 'white', borderRadius: 2.50, border: '1px #767676 solid'}} />

                <div className="sep-btm" style={{width: 397.33, height: 8, background: '#EDEDED', borderRadius: 16}} />
                <h3 className="h3-trust">Trust and Safety</h3>
                {riderInfo.map((info) => (
                    <FeedCard key={info.id} {...info} handleCard={handleCard} />
                ))}
                {available === false && <div>There are no rides yet for today between these cities
             
                <h1>
                {SourcePlace} → {DestinationPlace}
                </h1>
                <h2>
                Would you like to be the first to offer a ride?
                </h2>

                <button className="btn btn-primary" onClick={()=>OfferRide()}>Offer a ride</button>
                    </div>} 
                </div>
                
                
            </div>
            </>
            }   
           
            <div className="cards-left">
                
               
                             
                    
                </div>
                
            
            <div className = "media-r-f-foot r-f-foot">
                <Footer/>
            </div>
        </div>
    )
}


// Path: saath-chalo/src/components/RideFeed/FeedCard.jsx