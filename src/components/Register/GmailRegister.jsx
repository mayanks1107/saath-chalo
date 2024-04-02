import React, { useState } from "react";
// import {useContext} from "react";
// import { auth } from "../../Firbase/firbase";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
 
// } from "firebase/auth";
import {
 
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBRadio,
 } from "mdb-react-ui-kit";
import {Server} from "../Server/Server"

import axios from "axios";


import "react-phone-input-2/lib/style.css";
import { toast, Toaster } from "react-hot-toast";

import "./regi.css";
import Footer from "../Footer/Footer";
import Header from "../Header/headers";
import { useNavigate } from "react-router-dom";
    
    function GmailRegister() {
      const [basicModal, setBasicModal] = useState(false);
      const toggleOpen = () => setBasicModal(!basicModal);
      
      const [checked, setChecked] = useState(false);
      // const [phoneMatch, setphoneMatch] = useState(false);
      // const phoneOpen = () => setphoneMatch(!phoneMatch);
      const navigate = useNavigate();
      const [Value, setValues] = useState({
        Name: "",
        Email: "",
        Password: "",
        PhoneNumber: "",
        Licenseno: "",
        AadharNo:"",
        Vehicleno: "",
        Rc: "",
        SourcePlace: "",
        DestinationPlace: "",
        typeOfTrip  : "",
        dateOfTrip: "",
        timeOfTrip: "",
        Distance: "",
      });
      const [gender,setGender] = useState();
    
      const RegisterForRider = async () => {
        try {
          if(Value.Name =="" || Value.Email =="" || Value.Password =="" || Value.PhoneNumber =="" || Value.Licenseno =="" || Value.AadharNo =="" || Value.Rc ==""){
            toast.error("Please fill all the fields");
            return;
          }
          if(Value.PhoneNumber.length !== 10 ){
            toast.error("Phone Number must be 10 digit");
          }else{
          let response = await axios.post(`${Server}/rider/post`, {
            Name: Value.Name,
            Email: Value.Email,
            Password: Value.Password,
            PhoneNumber: Value.PhoneNumber,
            Licenseno: Value.Licenseno,
            Vehicleno: Value.Vehicleno,
            Rc: Value.Rc,
            AadharNo:Value.AadharNo,
            IsRider: true,
          });
          console.log(response);
          if(response.data.success === true){
            toast.success(response.data.message);
          } else if (response.data.success === false){
              console.log("data is not inserted");
          }
          // toast.success(response.data.message);
          // setInterval(navigate("/login"), 5000);
        }
        } catch (error) {
          if(error.response.status === 404){
            toast.error(error.response.data.message);
          }else{
            console.log(error);
          }
        }
      };
    
      const RegisterForUser = async () => {
        // e.preventDefault();
        try {
          if(Value.Name =="" || Value.Email =="" || Value.Password =="" || Value.PhoneNumber ==""){
            toast.error("Please fill all the fields");
            return;
          }
          if(Value.PhoneNumber.length !== 10 ){
            toast.error("Phone Number must be 10 digit");
          }else{
            let url = `${Server}/user/post`;
            let response =await  fetch(url, {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(
              {FullName:Value.Name,
               Email: Value.Email,
               Gender: gender,
               PhoneNumber: Value.PhoneNumber,
              Password: Value.Password,
              IsRider: false,
             })});
              let data =await response.json();
              console.log(data.success);
              if(data.success === true){
                toast.success(data.message);
                // setBasicModal(true);
                PassengerChange();
              } else if (data.success === false){
                  toast.error(data.message);
              }
    
          }
        } catch (error) {
          toast.error("error");
        }
      };
    
      function clickHelper() {
        console.log(document.getElementById("inp-check-rider").checked);
        setChecked(document.getElementById("inp-check-rider").checked);
      }
      const PassengerChange = async () => { 
      let url = `${Server}/passenger`; 
     let response =await  fetch(url, {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(
       {FullName:Value.Name,
        Email: Value.Email,
        Gender: gender,
        Distance: Value.Distance,
        PhoneNumber: Value.PhoneNumber,
          
      
      })});
      let data =await response.json();
      console.log(data);
      (data.success === true )?  toast.success(data.message): toast.error(data.message);
      }
      return (
        <>
       <Header />
      <MDBContainer className="mb-container" fluid>
        <Toaster toastOptions={{ duration: 4000 }} />

        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up with You Gmail
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, Name: e.target.value }))
                    }
                    type="text"
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, Email: e.target.value }))
                    }
                    type="email"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="unlock-alt me-3" />
                  <MDBInput
                    label="Password"
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        Password: e.target.value,
                      }))
                    }
                    id="form2"
                    type="password"
                  />
                  {/* {!passwordMatch && <p style={{ color: 'red' }}>Passwords do not match!</p>} */}
                </div>
                <div className="d-flex flex-row align-items-center mb-3">
                  <MDBIcon fas icon="fas fa-mars-stroke-up me-1" />
                  <MDBRadio name='inlineRadio' id='inlineRadio1' value={gender} onChange={()=>setGender("Male")} label='Male' inline />
                  <MDBRadio name='inlineRadio' id='inlineRadio2' value={gender} onChange={()=>setGender("Female")} label='Female' inline />
                  <MDBRadio name='inlineRadio' id='inlineRadio2' value={gender} onChange={()=>setGender("other")} label='other' inline />
                </div>

                <div className="d-flex flex-row align-items-center ">
                  <MDBIcon fas icon="phone me-3" size="lg" />
                  <MDBInput
                    label="Enter  Phone Number "
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        PhoneNumber: e.target.value,
                      }))
                    }
                    id="form2"
                    type="tel"
                  />
                </div>

                <div className="d-flex flex-row align-items-center" >
                  <input
                    onChange={() => clickHelper()}
                    id="inp-check-rider"
                    className="bool-radio"
                    type="checkbox"
                  />
                  <h6 className="are-rider flex-row ">Are you a rider?</h6>
                </div>
                {checked ? (
                  <>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="address-card me-3" size="lg" />
                      <MDBInput
                        label="License Number"
                        onChange={(e) =>
                          setValues((prev) => ({
                            ...prev,
                            Licenseno: e.target.value,
                          }))
                        }
                        id="form3"
                        type="text"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="id-card  me-3" size="lg"/>
                      <MDBInput
                        label="Aaadhar Number"
                        id="form4"
                        onChange={(e) =>
                          setValues((prev) => ({
                            ...prev,
                            AadharNo: e.target.value,
                          }))
                        }
                        type="text"
                      />
                    </div>
                    
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="address-book me-3" size="lg" />
                      <MDBInput
                        label="(RC) Registration Number"
                        id="form4"
                        onChange={(e) =>
                          setValues((prev) => ({ ...prev, Rc: e.target.value }))
                        }
                        type="text"
                      />
                    </div>
                  </>
                ) : (
                  <p></p>
                )}

                {/* <MDBBtn className='mb-4' size='lg'>Register</MDBBtn> */}
                {/* <MDBBtn className='mb-4' size='lg' onClick={()=>Register()}>Register</MDBBtn> */}
                {checked ? (
                  <MDBBtn
                    className="mb-4"
                    size="lg"
                    onClick={() => RegisterForRider()}
                  >
                    Rider Register
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    className="mb-4"
                    size="lg"
                    onClick={() => RegisterForUser()}
                    // onClick={() =>{ toggleOpen();}}
                  >
                    User Register
                  </MDBBtn>
                )}
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        <MDBModal  open={basicModal} setopen={setBasicModal} tabIndex="12"  disableBackdropClick >
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>
                  <p>Save Successfully</p>
                </MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleOpen}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggleOpen}>
                  Close
                </MDBBtn>
                <MDBBtn onClick={()=>PassengerChange()}>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </MDBContainer>
      
      
      <Footer />
        </>
      )
    }
    
    export default GmailRegister
    