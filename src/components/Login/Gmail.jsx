import React, { useState } from "react";

// import {useContext} from "react";
import gifLog from "../../assets/loganim.gif";
import { auth } from "../../Firbase/firbase";
import {MDBContainer,MDBCol,MDBRow,MDBBtn,MDBCheckbox} from "mdb-react-ui-kit";
import { Server } from "../Server/Server";

import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

import "./login.css";
import Footer from "../Footer/Footer";
import Header from "../Header/headers";
// GooGle Auth
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate  } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Gmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  const [Urider, setUrider] = useState(false);
  const AreuRider = () => setUrider(!Urider);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    console.log("Sign in with google");
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.log(result);
        const user = result.user;
        console.log(user.displayName);
        console.log(user.email);
        if (Urider) {
          console.log("Rider");
          let url = `${Server}/rider/gmailLogin`;
          const res = await axios.post(url, { Email: user.email });
          if (res.data.success) {
            localStorage.setItem("token", JSON.stringify(res.data.result));
            console.log("true");
            navigate("/rideRequest");
          } else if (response.data.success === false) {
            toast.error(response.data.message);
          }
        } else {
          console.log("User");
          let url = `${Server}/user/gmailLogin`;
          const res = await axios.post(url, { Email: user.email });
          if (res.data.success) {
            localStorage.setItem("token", JSON.stringify(res.data.result));
            console.log("true");
            navigate("/rideFeed");
          } else if (res.data.success === false) {
            toast.error(res.data.message);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="log-em">
      <Header />
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <Toaster toastOptions={{ duration: 6000 }} />
        <MDBRow>
          <MDBCol col="10" md="6">
            {/* eslint-disable-next-line */}
            <img
              className="log-img"
              src={
                gifLog
                // "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              }
              class="img-fluid"
              alt="Sample image"
            />
          </MDBCol>
          <MDBCol className="right-container" col="4" md="6">
            {/* <div class="vl-3"></div> */}
            <div className="divider d-flex align-items-center my-4">
              <p  className="or text-center fw-bold mx-3 mb-0"></p>
            </div>
            {/* <div class="vl-2"></div> */}
            
            {state === "login" ? (
              <div className="abcde">
              <MDBBtn
                
                className="mb-0 px-5 btn-login"
                color="danger"
                size="lg"
                onClick={signInWithGoogle}
              >
                Login with Gmail
              </MDBBtn>
              </div>
            )
            
             : (
              <div className="abcdfe">
              <MDBBtn
                className="mb-0 px-5 btn-login"
                color="danger"
                size="lg"
                onClick={() => navigate("/gmail-register")}
              >
                Register with Gmail
              </MDBBtn>
              </div>
            )}
            
            <br />
            <br />
            <p className="orrrr">OR</p>
            <br />
            <br />
            <div className="email-form-log">
              {state === "login" ? 
              <MDBBtn
                className="mb-0 px-5 btn-login log-e"
                color="success"
                onClick={() => navigate("/login")}
                size="lg"
              >
                Login with Email Or Phone No
              </MDBBtn>
                 :
                 <MDBBtn
                 style={{position: "relative", top: "80px", left: "22%"}}
                 className="mb-0 px-5 btn-login "
                 color="success"
                 onClick={() => navigate("/register")}
                 size="lg"
               >
                 Register with Email/Phone
               </MDBBtn>
                 }
            </div>
            {state === "login" ? 
            
            <div  className="checkkk d-flex justify-content-between ">
              <MDBCheckbox
                
                name="flexCheck"
                value={Urider}
                onClick={() => AreuRider()}
                id="flexCheckChecked"
                label="Are You a Rider"
                required
              />
            </div>
            
            : null}
            <div className="text-center text-md-start mt-4 pt-2">
              {/* {!Urider ? ( */}

              {/* )} */}
              {state === "login" ? 
              <p className="have-acc-g small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <Link style={{color: "#cdd"}}  to='/gmail' state="register">Register</Link>
              </p>
              :
              <p style={{marginLeft: "25%", color: "#000"}} className="small fw-bold mt-2 pt-1 mb-2">
                Already have an account?{" "}
                <Link style={{color: "#cdd"}}  to='/gmail' state="login" >Login</Link>
              </p>
              }
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="Botton">
        <Footer />
      </div>
    </div>
  );
}

export default Gmail;
