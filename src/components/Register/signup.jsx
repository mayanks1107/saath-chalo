import React, { useEffect, useState } from "react";
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

} from "mdb-react-ui-kit";
import Footer from "../Footer/Footer";
import axios from "axios";
import Header from "../Header/headers";
// import { auth } from '../../Firbase/firbase';
import { toast, Toaster } from "react-hot-toast";
import "./regi.css";
import { useNavigate } from "react-router-dom";
import { Server } from "../Server/Server"; 


function Signup() {
  const [checked, setChecked] = useState(false);
  const [phoneMatch, setphoneMatch] = useState(false);
  const phoneOpen = () => setphoneMatch(!phoneMatch);
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
  });

  const RegisterForRider = async () => {
    try {
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
      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const RegisterForUser = async () => {
    // e.preventDefault();
    try {
      //  Checking the phone is already exist or not
      let url = `${Server}/user/getboth/${Value.Email}/${Value.PhoneNumber}`;
      // let url  = `http://localhost:4000/user/getboth/${Value.Email}/${Value.PhoneNumber}`;
      const response = await fetch(url,{method: 'GET',headers: {'Content-Type': 'application/json'},});
      const IsPresent = await response.json();
      console.log(`IsPresent ${IsPresent}`);
      if (IsPresent == true) {
        alert(
          "Phone And Email already exists. Please choose a number and email."
        );
      } else {
        // Posting the data to backend
        let response = await axios.post(`${Server}/user/post`, {
          FullName: Value.Name,
          Email: Value.Email,
          PhoneNumber: Value.PhoneNumber,
          Password: Value.Password,
          IsRider: false,
        });
        if (response != null) {
          if (response.data !== null) {
            if (response.data.success == true) {
              toast.success(response.data.message);
            } else {
              toast.error(response.data.message);
            }
          } else {
            console.log("559");
            console.log(response);
          }
        }
        // toast.success(response.data);
        // After 5 sec the  navigate to login page 
        setInterval(navigate("/login"), 5000);
      }
    } catch (error) {
      toast.error("error");
    }
  };

  function clickHelper() {
    console.log(document.getElementById("inp-check-rider").checked);
    setChecked(document.getElementById("inp-check-rider").checked);
  }
  return (
    <>
      <Header />
      <MDBContainer fluid>
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
                  Sign up
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
                {!phoneMatch && (
                    <div className="py-0">
                      <p style={{ color: "red" }}>Phone Number must  10 length!</p>
                    </div>
                  )}
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
                      <MDBIcon fas icon="truck-fast me-3" size="lg" />
                      <MDBInput
                        label="Vehicle Number"
                        id="form4"
                        onChange={(e) =>
                          setValues((prev) => ({
                            ...prev,
                            Vehicleno: e.target.value,
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
      </MDBContainer>
      <div style={!checked ? { marginTop: "86px" } : null}>
        {/* <div > */}
        <Footer />
      </div>
    </>
  );
}

export default Signup;
