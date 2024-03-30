import React,{useState, useEffect} from "react";
import Headers from "../Header/headers";
import default_pro from "../../assets/profile-pic-def.jpg";
import "./profile.css";
import Footer from "../Footer/Footer";
import Header from "../Header/headers";
import { toast, Toaster } from "react-hot-toast";
import { Server } from "../Server/Server";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
   
  } from "mdb-react-ui-kit";
export default function RiderProfile(){
  const [Profile, setProfile] = useState([]);
  const [TripDetail, setTripDetail] = useState([]);
  useEffect(() => {
    const getProfile = async () => {
    const riderUrl= `${Server}/rider/get`;
    const tripUrl = `${Server}/tripdet`;
    const response = await fetch( riderUrl, {method: 'GET', headers: {'Content-Type': 'application/json'}});
    if (response.ok) {
        let riderData = await response.json();
       let Email =JSON.parse(localStorage.getItem("token")).Email;
        const newriderData=riderData.filter(profile => profile.Email ===Email);  
        setProfile(newriderData[0])
     }
    const response2 = await fetch( tripUrl, {method: 'GET', headers: {'Content-Type': 'application/json'}});
    if (response2.ok) {
        const data = await response2.json();
       let Email =JSON.parse(localStorage.getItem("token")).Email;
        const newData=data.filter(profile => profile.Email ===Email);  
        setTripDetail(newData[0])
     }
    }
    getProfile();
  }, []); 
  // console.log(Profile);
  // console.log(TripDetail);
    return (
        <div className = "profile">
            <Headers/>
            <h1> Profile</h1>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <Toaster toastOptions={{ duration: 6000 }} />
        <MDBRow>
          <MDBCol className="pro-img" col="10" md="6">
            {/* eslint-disable-next-line */}
            <img
              className="pro-img"
              src={
                default_pro
              }
              class="img-fluid"
              alt="Sample image"
            />
          </MDBCol>
          <MDBCol className="right-container-pro" col="4" md="6">
          <div className="profile-info">
                <h3 className="profile-h3">Email Id: </h3>
                <p className="profile-p"><h3>{Profile.Email}</h3></p>
                <br/>
                <h3 className="profile-h3">Phone Number: </h3>
                <p className="profile-p"><h3>{Profile.PhoneNumber}</h3></p>
                <br/>
                <h3 className="profile-h3">Aadhar Number: </h3>
                <p className="profile-p"><h3>{Profile.AadharNo}</h3></p>
                <br/>
                <h3 className="profile-h3">License Number: </h3>
                <p className="profile-p"><h3>{Profile.Licenseno}</h3></p>
                <br/>
                <h3 className="profile-h3">Vehicle Number: </h3>
                <p className="profile-p"><h3>{TripDetail.VehicleNumber}</h3></p>
                <br/>
                <h3 className="profile-h3">RC Number: </h3>
                <p className="profile-p"><h3>{Profile.Rc}</h3></p>
                <br/>
                <h3 className="profile-h3">Vehicle Color: </h3>
                <p className="profile-p"><h3>{TripDetail.VehicleColor}</h3></p>
                <br/>
                <h3 className="profile-h3 com">Company Name: </h3>
                <p className="profile-p com-dum">Dummy Name</p>
                <br/>
                <h3 className="profile-h3 rat">Rating: </h3>
                <p className="profile-p rat-dum"><h3>{TripDetail.Rating}</h3></p>
                <br/>
            </div>
          </MDBCol>
        </MDBRow>
        {/* <MDBBtn color="secondary" onClick={handleChange}>Testing</MDBBtn> */}
        {/* Modal */}

        
      </MDBContainer>
      <div className="pro-foot" >
              <Footer/>
            </div>
        </div>
    )
}
{/* <h1 className="profile-h1">Profile</h1>
            <div className="profile-info">
                <h3 className="profile-h3">Gender:  </h3>
                <p className="profile-p">Dummy Gender</p>
                <br/>
                <h3 className="profile-h3">Destination Place:</h3>
                <p className="profile-p">Dummy Destination</p>
                <br/>
                <h3 className="profile-h3">Type of Trip</h3>
                <p className="profile-p">Dummy type</p>
                <br/>
                <h3 className="profile-h3">Date of Trip</h3>
                <p className="profile-p">Dummy date</p>
                <br/>
                <h3 className="profile-h3">Time of Trip</h3>
                <p className="profile-p">Dummy Time</p>
            </div>
            <div className="profile-foot">
                <Footer/>
            </div>d */}