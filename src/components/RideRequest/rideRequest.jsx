import React,{useState,useEffect}from 'react'
import "../RideRequest/rideRequest.css"
import Profile from "../../assets/Profile.jpg"
import Header from "../Header/headers"
import Footer from "../Footer/Footer"
import PassengerList from "../RideRequest/PassengerList"

function rideRequest() {
    const [ passenger, setPassenger ] = useState([]);
    useEffect(()=>{
        const PassengerList = async () => {
            try {
                // const url = `http://localhost:4000/passenger/get`;
                const url = `https://saatchalo.onrender.com/passenger/get`;
                
                const response = await fetch(url, {method: 'GET', headers: {
                    "Content-Type": "application/json",
                  }});
        
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const data = await response.json();
                console.log("this is data:-",data);
                setPassenger(data);
                // console.log(riderInfo);
            } catch (error) {
                console.error('Error fetching rider data:', error);
            }
        }
        
        PassengerList()
    },[]);
    console.log(passenger);
    
    return (
        <>
            <Header />
            <div class="wrapper1">
                <h1 >Ride Requests</h1>
                <h2 class="font">Today</h2>
            </div>

            <div class="wrapper">
                <div class="rectangular-box">
                    {/* <!-- Row 1 --> */}
                    <div class="row profilePic">
                        <img src={Profile} />
                        <div class="column">Passenger Name : <br /><span class="font">Manmohan</span></div>
                        <div class="column"></div>
                    </div>

                    {/* <!-- Row 2 --> */}
                    <div class="row">
                        <div class="column1"></div>
                        <div class="column">Source : <br /><span class="font">Chandigarh</span></div>
                        <div class="column">Destination : <br /><span class="font">Delhi</span></div>
                    </div>

                    {/* <!-- Row 3 --> */}
                    <div class="row">
                        <div class="column1"></div>
                        <div class="column">Time : <br /><span class="font">19:00</span></div>
                        <div class="column">Date : <br /><span class="font">01-01-2024</span></div>

                    </div>

                    {/* <!-- Row 4 --> */}
                    <div class="row">
                        <div class="column1"></div>
                        <div class="column">Gender : <br /><span class="font">Male</span></div>
                        <div class="column">Amount : <br /><span class="font">1000 K</span></div>

                    </div>
                </div>
                {passenger.map((passenger) => (
                    <PassengerList key={passenger.id} {...passenger} Profile={Profile} />
                ))}

                
                {/* <PassengerList Profile={Profile}/> */}

            </div>

            


            <div className="Footer"><Footer /></div>



        </>

    )
}

export default rideRequest;
