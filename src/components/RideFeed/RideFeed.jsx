import React, { useEffect, useState } from "react";
import Headers from "../Header/headers";
// import axios from 'axios'
import {Server} from "../Server/Server"
import "./RideFeed.css";
import FeedCard from "./FeedCard";
import { toast, Toaster } from "react-hot-toast";

// import pic from "../../assets/proflic-pic.png";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
export default function RideFeed(){
    const navigate = useNavigate();
   
    const [riderInfo, setRiderInfo] = useState([])
    const [SourcePlace,setSourcePlace] = useState("");
    const [DestinationPlace,setDestinationPlace] = useState("");
    const [dateOfTrip,setdateOfTrip] = useState("");
    const [noOfPassenger,setNoofPassenger] = useState();
    const [lowestPrice, setlowestPrice] = useState(false);
    // const [earliestDep, setearliestDep] = useState(false);
    // const [closeDep, setcloseDep] = useState(false);
    // const [closeArrival, setcloseArrival] = useState(false);
    const [shortestRide, setshortestRide] = useState(false);
    const [before6, setBefore6] = useState(false);
    const [between6_12, setBetween6_12] = useState(false);
    const [between12_18, setBetween12_18] = useState(false);
    const [after6, setAfter6] = useState(false);

    const RiderSearch = async () => {
        try {
            // const url = `https://saatchalo.onrender.com/tripdet`;
            const url = `${Server}/tripdet/getpath`;
            console.log(SourcePlace); 
            console.log(DestinationPlace);
            console.log(dateOfTrip); 
            console.log(noOfPassenger); 
            const response = await fetch(url,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                SourcePlace:SourcePlace.toLowerCase() || "",
                DestinationPlace: DestinationPlace.toLowerCase() || "",
                dateOfTrip: dateOfTrip || ""
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            if(data.success){
                console.log("data.query");
                // setRiderInfo(data.query);
            setRiderInfo(data.query);
            }else{
                console.log(data.message);
                setAvailable(false);
                // toast.error("No Data Found");
            }
            console.log(riderInfo);
        } catch (error) {
            console.error('Error fetching rider data:', error);
        }
    };
    const Before6 = () => {
        console.log("before6");
        setBefore6(true);
        console.log(riderInfo[0].timeOfTrip);
        const newlist = riderInfo.filter(item => item.timeOfTrip < "06:00");
        // console.log(newlist);
        setRiderInfo(newlist);
    }
    const Between6_12 = () => {
        console.log("between6_12");
        setBetween6_12(true);
        const newlist = riderInfo.filter(item => item.timeOfTrip > "06:00" && item.timeOfTrip < "12:00");
        // console.log(newlist);
        setRiderInfo(newlist);

    }
    const Between12_18 = () => {
        console.log("between12_18");
        setBetween12_18(true);
        const newlist = riderInfo.filter(item => item.timeOfTrip > "12:00" && item.timeOfTrip < "18:00");
        setRiderInfo(newlist);
    }
    const After6 = () => {  
        console.log("after6");
        setAfter6(true);
        const newlist = riderInfo.filter(item => item.timeOfTrip > "18:00");
        // console.log(newlist);
        setRiderInfo(newlist);

    }

    const LowestPrice = () => {
        console.log("lowestPrice");
        setlowestPrice(true);
        const newlist = [...riderInfo];
        console.log(newlist);
        // console.log(newlist[0].Price);
        newlist.sort((a, b) => a.Price - b.Price);
        console.log(newlist);
        setRiderInfo(newlist);
    }
    // // const EarliestDeparture = () => {
    // //     console.log("earliestDeparture");
    // //     setearliestDep(true);

    // //     console.log("earliestDeparture");
    // //     const newlist = [...riderInfo];
    // //     console.log(riderInfo[0].dateOfTrip);
    // //     newlist.sort((a, b) => {
    // //         console.log(a.dateOfTrip - b.dateOfTrip);
    // //         return a.dateOfTrip - b.dateOfTrip;
        
    // //     })
    // //     console.log(newlist);
    // //     // setRiderInfo(newlist);
    // // }
    // const EarliestDeparture = () => {
    //     // console.log("earliestDeparture");
    //     // setearliestDep(true);
    //     // console.log("earliestDeparture");
    //     // // Assuming riderInfo is an array of objects with a dateOfTrip property
    //     // const newlist = [...riderInfo];
    //     // // Make sure riderInfo contains valid data
    //     // console.log(riderInfo[0]?.dateOfTrip);

    //     // // Parse date strings into Date objects and format them as strings
    //     // newlist.forEach(item => {
    //     //     const dateObject = new Date(item.dateOfTrip);
    //     //     item.dateOfTrip = dateObject.toLocaleString(); // Format as desired
    //     // });

    //     // // Sort based on formatted date strings
    //     // newlist.sort((a, b) => {
    //     //     console.log(a.dateOfTrip - b.dateOfTrip);
    //     //     return a.dateOfTrip - b.dateOfTrip;
    //     // });

    //     // console.log(newlist);
    //     }
    // const CloseDeparture = () => {
    //     console.log("closeDepar");
    //     setcloseDep(true);
    //     // const newlist = [...riderInfo];  
    //     // newlist.sort((a, b) => {
    //     //     const dateA = new Date(a.dateOfTrip);
    //     //     const dateB = new Date(b.dateOfTrip);
    //     //     return dateA - dateB;
        
    //     // })
    //     // setRiderInfo(newlist);

    // }
    // const CloseArrival = () => {
    //     console.log("CloseArrival");
    //     setcloseArrival(true);
    //     // const newlist = [...riderInfo];
    //     // newlist.sort((a, b) => {
    //     //     const dateA = new Date(a.dateOfTrip);
    //     //     const dateB = new Date(b.dateOfTrip);
    //     //     return dateA - dateB;

    //     // })

    //     // setRiderInfo(newlist);
    // }
    const ShortestRide = () => {
        console.log("ShortestRide");        
        // Distance
        setshortestRide(true);
        const newlist = [...riderInfo];
        newlist.sort((a, b) => a.Distance - b.Distance);
        console.log(newlist);
           setRiderInfo(newlist);

    }
    const clear = () => {
        setlowestPrice(false);
        // setearliestDep(false);
        // setcloseDep(false);
        // setcloseArrival(false);
        setshortestRide(false);
        setBefore6(false);
        setBetween6_12(false);
        setBetween12_18(false);
        setAfter6(false);
        Riderhandle();

    }
    
    const Riderhandle = async () => {
        try {
            // const url = `https://saatchalo.onrender.com/tripdet`;
            const url = `${Server}/tripdet`;
            const response = await fetch(url);   
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }    
            const data = await response.json();
            // console.log("efiefiebi",data);
            setRiderInfo(data);
            // console.log(riderInfo);
        } catch (error) {
            console.error('Error fetching rider data:', error);
        }
    };
    useEffect(()=>{Riderhandle()
     // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]) 
   
  // To Handle the Paticular Card   
  function handleCard(id){
    console.log("hello");
    const newlist=riderInfo.filter(rider=> rider._id ===id);   
    console.log(newlist);
    navigate('/bookRide',{ state: { list:newlist} }); 
    
    
   }
//  Checking the Rider Is a Valid or not
// const CheckData =()=>{
//     if(localStorage.getItem("token")!=null){
//       JSON.parse(localStorage.getItem("token"))
//     //   setRiderInfo(localStorage.getItem("token"))
        
//     }else{
//         toast.error("Not Found");
//         navigate('/gmail-login');  
//     }
// }
// useEffect(()=>{
//     CheckData()
//    },[]) 

   

    return(
        <div className="rFeed">
            <Headers/>
            <Toaster toastOptions={{ duration: 16000 }} />
            <div className="form-submit">
                <input className="inp input-from" type="text"onChange={(e) => setSourcePlace(e.target.value)} placeholder="from" name="from"/>
                <input className="inp input-to" type="text" onChange={(e) => setDestinationPlace (e.target.value)} placeholder="to" name="to"/>
                <input className="inp-media-from inp input-to"onChange={(e) => setdateOfTrip(e.target.value)} type="date" placeholder="date" name="date"/>
                <input className="inp input-to" type="number" onChange={(e) => setNoofPassenger(e.target.value)} placeholder="number" name="number"/>
                <button className="inp search-form btn btn-primary" onClick={RiderSearch}>Search</button>
                
            </div>
            <h2 className="text-feed">Today</h2>
            <div className="sorter">
                <h4 className="h2-sort">Sort By</h4>
                 <span onClick={()=>clear()} style={{cursor: "pointer"}}><h5 className="h3-clear">Clear all</h5> </span>
                <p className="right-p dep">Lowest price</p>
                <input className="rad dep-rad" checked={lowestPrice} onClick={()=>LowestPrice()}type="radio"/>
                <p className="right-p low" >Shortest ride</p>
                <input className="rad low-rad"checked={shortestRide} onClick={()=>ShortestRide()} type="radio"/>
                {/* <p className="right-p close-dep">Close to Departure</p>
                <input className="rad close-dep-rad"checked={closeDep} onClick={()=>CloseDeparture()} type="radio"/>
                <p className="right-p close-arr">Close to arrival</p>
                <input className="rad close-arr-rad" checked={closeArrival} onClick={()=>CloseArrival()}  type="radio"/>
                <p className="right-p short-ride">Shortest ride</p>
                <input className="rad short-ride-rad"checked={shortestRide} onClick={()=>ShortestRide()} type="radio"/> */}
                <div className="helper-media">
                <div className="sep-top" style={{width: 397.33, height: 8, background: '#EDEDED', borderRadius: 16}} />
                {/* DeParture Time */}
                <h4 className="h2-departure">Departure time</h4>
                {/* Departure Time before 6  */}
                <p className="media-p p-before-6">Before 06:00</p>
                <span onClick={()=>Before6()}><div className="media-sq m-s-6 sq-6"style={{width: 13, height: 13, background: before6?"blue":"white" , borderRadius: 2.50, border: '1px #767676 solid'}} /></span>
                {/* Departure Time between 6 and 12  */}
                <p className="media-p p-6-12">06:00 to 12:00</p>
                <span onClick={()=>Between6_12()}><div className="media-sq m-s-6 sq-6-12" style={{width: 13, height: 13, background: between6_12?"blue":"white", borderRadius: 2.50, border: '1px #767676 solid'}} /></span>
                {/* Departure Time between 12 and 18  */}
                <p className="media-p p-12-8">12:01 to 18:00</p>
                <span onClick={()=>Between12_18()}><div className="media-sq m-s-6 sq-12-18" style={{width: 13, height: 13, background: between12_18?"blue":"white", borderRadius: 2.50, border: '1px #767676 solid'}} /></span>
               
               {/* Departure Time After 6  */}
                <p className="media-p p-after-18">After 18:00</p>
                <span onClick={()=>After6()}><div className="media-sq m-s-6 sq-after-18" style={{width: 13, height: 13, background: after6?"blue":"white", borderRadius: 2.50, border: '1px #767676 solid'}} /></span>
                {/* <div className="media-sq m-s-6 sq-after-18" style={{width: 13, height: 13, background: 'white', borderRadius: 2.50, border: '1px #767676 solid'}} /> */}

                <div className="sep-btm" style={{width: 397.33, height: 8, background: '#EDEDED', borderRadius: 16}} />
                <h3 className="h3-trust">Trust and Safety</h3>
                </div>
                </div>
            <div style={{backgroundColor: "rgba(255, 255, 255, 0.729)"}}  className = "right">
            <div className="cards-left">
                
                {/* <FeedCard className = "abcd" SourcePlace = "Delhi" DestinationPlace = "Gurgaon" dateOfTrip="2024-01-02" timeOfTrip="05:20" FullName = "Mayank" Rating = "5"/>
                
                <FeedCard SourcePlace = "Delhi" DestinationPlace = "Gurgaon" dateOfTrip="2024-01-02" timeOfTrip="05:20" FullName = "Mayank" Rating = "5"/> */}
                
                {riderInfo.map((info) => (
                    <FeedCard key={info.id} {...info} handleCard={handleCard} />
                ))}


            
                                  
                    
                </div>
                
            </div>
            
                
            
            <div className = "media-r-f-foot r-f-foot">
                <Footer/>
            </div>
        </div>
    )
}


{/* <tr key={info._id}>
<div className="fCard">
    <div className="card carda">
      <div className="card-body">
        <h5 className="card-title from">{info.SourcePlace}</h5>
        <hr id="myhr"></hr>
        <h5 className="card-title to">{info.DestinationPlace}</h5>
        <p className="card-text price">{"56"}</p>
        <p className="card-text price">₹{props.price}.00</p>
        <p className="card-text strt">{info.typeOfTript}</p>
        <p className="card-text end">{info.timeOfTrip}</p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
        <img className = "pic" src = {pic} alt = "profile pic"/>
        <p className="card-text name">{info.PhoneNumber}</p>
        <p className="card-text rating">{info.availableSeat}⭐</p>
      </div>
    </div>
</div>
</tr> */}