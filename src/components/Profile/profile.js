import React ,{useState,useEffect} from "react";
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
    MDBBtn,
    MDBInput,
    MDBCheckbox,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from "mdb-react-ui-kit";
export default function Profile(){
  const [Profile, setProfile] = useState([]);
  useEffect(() => {
    const getProfile = async () => {
    const url = `${Server}/passenger/get`;
    const response = await fetch(url, {method: 'GET', headers: {'Content-Type': 'application/json'}});
    if (response.ok) {
        const data = await response.json();
       let Email =JSON.parse(localStorage.getItem("token")).Email;
        const newData=data.filter(profile => profile.Email ===Email);  
        setProfile(newData[0])
     }
    }
    getProfile();
  }, []); 
    return (
        <div className = "profile">
            <Headers/>
            <h1> Profile</h1>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <Toaster toastOptions={{ duration: 6000 }} />
        <MDBRow>
          <MDBCol col="10" md="6">
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
                <h3 className="profile-h3">Full Name  </h3>
                <p className="profile-p"><h3>{Profile.FullName}</h3></p>
                <br/>
                <h3 className="profile-h3">Email: </h3>
                <p className="profile-p"><h3>{Profile.Email}</h3></p>
                <br/>
                <h3 className="profile-h3">Phone Number: </h3>
                <p className="profile-p"><h3>{Profile.PhoneNumber}</h3></p>
                <br/>
                <h3 className="profile-h3">Gender: </h3>
                <p className="profile-p"><h3>{Profile.Gender}</h3></p>
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