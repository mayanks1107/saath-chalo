import React, { useState } from "react";
// import {useContext} from "react";
// import { auth } from "../../Firbase/firbase";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
 
// } from "firebase/auth";
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
import {Server} from "../Server/Server"
import OtpInput from "otp-input-react";
import axios from "axios";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, Toaster } from "react-hot-toast";

import "./regi.css";
import Footer from "../Footer/Footer";
import Header from "../Header/headers";
import { useNavigate } from "react-router-dom";
    
    function GmailRegister() {
        const [Urider, setUrider] = useState(false);
        const AreuRider = () => setUrider(!Urider);
      return (
        <>
        <Header />
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <Toaster toastOptions={{ duration: 6000 }} />
        <MDBRow>
          <MDBCol col="10" md="6">
            {/* eslint-disable-next-line */}
            <img
              className="log-img"
              src={
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              }
              class="img-fluid"
              alt="Sample image"
            />
          </MDBCol>
          <MDBCol className="right-container" col="4" md="6">
            {/* <div class="vl-3"></div> */}
            <div className="divider d-flex align-items-center my-4">
              <p className="or text-center fw-bold mx-3 mb-0"></p>
            </div>
            {/* <div class="vl-2"></div> */}
            <>
            <MDBBtn
                  className="mb-0 px-5 btn-login "
                  color="danger"
                
                  size="lg"
                >
                  Login with Gmail
                </MDBBtn>
                <br />
              <br />
            </>
            OR
            <br />
            <br />
            <div className="email-form">
            <MDBBtn
                  className="mb-0 px-5 btn-login "
                  color="success"
                
                  size="lg"
                >
                  Login with  Email Or Phone No
                </MDBBtn>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value={Urider}
                onClick={() => AreuRider()}
                id="flexCheckChecked"
                label="Are You a Rider"
              />
            </div>
            <div className="text-center text-md-start mt-4 pt-2">
              {/* {!Urider ? ( */}
              
              {/* )} */}
              
              
            </div>
          </MDBCol>
        </MDBRow>

    
    
     

        
      </MDBContainer>
       
      <div className="Botton">
        <Footer />
      </div>
        </>
      )
    }
    
    export default GmailRegister
    