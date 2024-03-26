import React,{useState,useEffect}from 'react'
import "../RideRequest/rideRequest.css"
import Profile from "../../assets/Profile.jpg"
import Header from "../Header/headers"
import Footer from "../Footer/Footer"
import PassengerList from "../RideRequest/PassengerList"
import { Server } from '../Server/Server'
import { useLocation, useParams } from 'react-router-dom'

function RideRequest() {
    let { Email } = useParams();
    console.log(Email);
    const [ passenger, setPassenger ] = useState([]);
  
    const [qValue, setQValue] = useState(null);
  
    useEffect(() => {
        // Get the current URL
        const url = window.location.href;
    
        // Parse the URL
        const urlParams = new URLSearchParams(url);
    
        // Retrieve the value after 'q='
        const qValue = urlParams.get('q');
        const qValue2 = urlParams.get('?q=');
        console.log(qValue2 + " " + qValue);
    

        // Set the state with the retrieved value
        setQValue(qValue);
    
        // If you want to do something with the retrieved value, you can use it here
    
      }, []); // Ensure this effect runs only once when the component mounts
    
console.log(qValue);
    
    return (
        <>
            <Header />
            <div className="wrapper1">
                <h1 >Ride Requests</h1>
                <h2 className="font">Today</h2>
            </div>

            <div className="wrapper">
                <div className="rectangular-box">
                    {/* <!-- Row 1 --> */}
                    <div className="row profilePic">
                        <img src={Profile} alt='profile' />
                        <div className="column">Passenger Name : <br /><span className="font">Manmohan</span></div>
                        <div className="column"></div>
                    </div>

                    {/* <!-- Row 2 --> */}
                    <div className="row">
                        <div className="column1"></div>
                        <div className="column">Source : <br /><span className="font">Chandigarh</span></div>
                        <div className="column">Destination : <br /><span className="font">Delhi</span></div>
                    </div>

                    {/* <!-- Row 3 --> */}
                    <div className="row">
                        <div className="column1"></div>
                        <div className="column">Time : <br /><span className="font">19:00</span></div>
                        <div className="column">Date : <br /><span className="font">01-01-2024</span></div>

                    </div>

                    {/* <!-- Row 4 --> */}
                    <div className="row">
                        <div className="column1"></div>
                        <div className="column">Gender : <br /><span className="font">Male</span></div>
                        <div className="column">Amount : <br /><span className="font">1000 K</span></div>

                    </div>
                </div>
                {/* {passenger.map((passenger) => (
                    <PassengerList key={passenger.id} {...passenger} Profile={Profile} />
                ))} */}

                
                {/* <PassengerList Profile={Profile}/> */}

            </div>

            


            <div className="Footer"><Footer /></div>



        </>

    )
}

export default RideRequest;
