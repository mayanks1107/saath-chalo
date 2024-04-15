import React,{useState,useEffect}from 'react'
import "../RideRequest/rideRequest.css"
import Profile from "../../assets/Profile.jpg"
import Header from "../Header/headers"
import Footer from "../Footer/Footer"
import PassengerList from "../RideRequest/PassengerList"
import { Server } from '../Server/Server'


function RideRequest() {
    
    const [ passenger, setPassenger ] = useState([]);
  
    useEffect(() => {
        const getPassenger = async () => {
        const url = `${Server}/passenger/get`;
        const response = await fetch(url, {method: 'GET', headers: {'Content-Type': 'application/json'}});
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            let Email =JSON.parse(localStorage.getItem("token")).Email;
            // console.log(Email);
            // setPassenger(data);
        
            const newData=data.filter(passenger => passenger.RiderEmail ===Email);  
            setPassenger(newData)
         }
        }
        getPassenger();
      }, []); 
    const Bookride =async (id)=>{
        const url = `${Server}/passenger/confirm/${id}`;
        const response = await fetch(url, {method: 'PUT', headers: {'Content-Type': 'application/json'}});
        if (response.ok) {
            const data = await response.json();
            alert("Ride has "+data.message);
            // window.location.reload();
        }
    }
    const RejectRide =async(id)=>{
        const url = `${Server}/passenger/reject/${id}`;
        const response = await fetch(url, {method: 'PUT', headers: {'Content-Type': 'application/json'}});
        if (response.ok) {
            const data = await response.json();
            alert("Ride has "+data.message);
            // window.location.reload();
        }
    }

    
    return (
        <div className='ride-req'>
            <Header />
            <div className="wrapper1">
                <h1 >Ride Requests</h1>
                <h2 className="font">Today</h2>
            </div>

            {passenger.length === 0 ? <h1 className="font"> No Request available</h1> :
             
            <div  className="wrapper">
            {passenger.map((passenger) => (
                    <div>
                        <PassengerList
                        {...passenger}
                        key={passenger._id}
                        Profile={Profile}
                        Bookride={()=>Bookride(passenger._id)}
                        RejectRide={()=>RejectRide(passenger._id)}
                          />
                    </div>
                ))}   
            </div>         
                 }
                    <div className="foot-book">
            <div className="Footer"><Footer /></div>
            </div>



        </div>

    )
}

export default RideRequest;
/* <div className="rectangular-box">
                    
                    <div className="row profilePic">
                        <img src={Profile} alt='profile' />
                        <div className="column">Passenger Name : <br /><span className="font">Manmohan</span></div>
                        <div className="column"></div>
                    </div>

                    
                    <div className="row">
                        <div className="column1"></div>
                        <div className="column">Source : <br /><span className="font">Chandigarh</span></div>
                        <div className="column">Destination : <br /><span className="font">Delhi</span></div>
                    </div>

                   
                    <div className="row">
                        <div className="column1"></div>
                        <div className="column">Time : <br /><span className="font">19:00</span></div>
                        <div className="column">Date : <br /><span className="font">01-01-2024</span></div>
                                
                    </div>

                  
                    <div className="row">
                        <div className="column1"></div>
                        <div className="column">Gender : <br /><span className="font">Male</span></div>
                        <div className="column">Amount : <br /><span className="font">1000 K</span></div>
                    </div>
                        <button  >Book⚡</button>
                     <button >Reject⚡</button>
                  
                </div> */