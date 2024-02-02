import React,{useState } from 'react';
import {auth} from '../../Firbase/firbase';
import {RecaptchaVerifier, signInWithPhoneNumber,signInWithEmailAndPassword} from 'firebase/auth';
import {MDBContainer, MDBCol, MDBRow,
    MDBBtn, MDBInput, MDBCheckbox,MDBModal,
    MDBModalDialog,MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter } from 'mdb-react-ui-kit';
import OtpInput from "otp-input-react";
import axios from 'axios'

import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { toast, Toaster } from "react-hot-toast";

import "./login.css"
import Footer from '../Footer/Footer';
import Header from '../Header/headers'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate  = useNavigate();
  const [basicModal, setBasicModal] = useState(false);
  const [Urider, setUrider] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);

  const AreuRider = () => setUrider(!Urider);

  const [phone,setPhone] = useState(null);
  const [Email,setEmail] = useState(null);
  const [Password,setPassword]= useState(null);

  const [user,setUser] = useState(null);
  const [otp,setOtp] = useState("");
  // const [user2, setUser2] = useState(null);
  const [loading, setLoading] = useState(false);

//  Email And Password
const EmailAndPassword = async()=>{
    
    const response = await axios.post(`http://localhost:4000/user/adminLogin`,
    {
      Email: Email,
      Password:Password
    })
    if(response!=null){
      if(response.data){
     if(response.data.success){
       localStorage.setItem("token",JSON.stringify(response.data.result));
     
     }else if(response.data.success ===false){
       toast.error(response.data.message);  
     }
     else{
       
     toast.error("Something went Wrong") 
     }
   }else{
     console.log("54");
     
     // toast.error(response.data.message)
   }
 }else{
   toast.error("Failed");  
 }
}
const LoginWithNoEmail = async() => {
  console.log("you are not rider");
  if ((Email==null || Password==null) && phone == null) {
      toast.error("Email,phone or password is Missing ");
  }else{
       if(phone==null ){
        //  Email And Password
        EmailAndPassword();
       }else{
        //  Login With Phone NUmber
          PhoneLogin();
       }
}
}





//  Login With Phone NUmber
const PhoneLogin = async()=>{
  if(phone!= null){
    toggleOpen();
    console.log(phone);
      try {
        const response = await fetch(
          `http://localhost:4000/user/getphone/${phone}`
        );
        const IsPresent = await response.json();
        console.log(`IsPresent ${IsPresent}`)
        if(IsPresent == true){
          alert('Phone And Email already exists. Please choose a number and email.');
        }
          const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
          const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
          toast.success('OTP SENT SUCCESSFULY');
          setUser(confirmation);
          // 
        }catch (error) {
          console.log(error);
        }
      }else{
      toast.error("Phone number is Missing");
      }
  }


const verifyOtp = async() => {
    try {
        const data = await user.confirm(otp)
        .then(async (res) => {
          console.log(res);
          //setUser2(res.user);
          setLoading(true);
        });
        console.log(data);

    } catch (error) {
        console.error(error)
    }
}
const LoginWithRider = async()=>{
  console.log("U are rider");
  
  const response = await axios.post(`http://localhost:4000/riderlogin/adminLogin`,
  {
    Email: Email,
    Password:Password
  })
 
  
  console.log(response);
  if(response!=null){
       if(response.data){
      if(response.data.success){
        localStorage.setItem("token",JSON.stringify(response.data.result));
        console.log("true");
        navigate("/rideRequest")
      }else if(response.data.success ===false){
        toast.error(response.data.message);  
      }
      else{
        
      toast.error("Something went Wrong") 
      }
    }else{
      console.log("54");
      
      // toast.error(response.data.message)
    }
  }else{
    toast.error("Failed");  
  }
 
}



  return (
    <>
    <Header/>
    <MDBContainer fluid className="p-3 my-5 h-custom">
        <Toaster toastOptions={{ duration: 4000 }} />
      <MDBRow>

        <MDBCol col='10' md='6'>
         {/* eslint-disable-next-line */}
          <img className='log-img' src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'} class="img-fluid" alt="Sample image" />
        </MDBCol>
        <MDBCol className='right-container' col='4' md='6'>

         

          {/* <div class="vl-3"></div> */}

          <div className="divider d-flex align-items-center my-4">
            <p className="or text-center fw-bold mx-3 mb-0"></p>
          </div>

          {/* <div class="vl-2"></div> */}
        
            <>
            <PhoneInput style={{width: "1250px;"}}  country={"in"} value={phone} onChange={(phone) => setPhone("+" + phone)}/><br/>
           </>
           
               OR
          <br />
          <br />
          

            <div className='email-form'>
            <MDBInput className='inp-login' wrapperClass='mb-4' onChange={(e) =>setEmail(e.target.value)} label='Email Id' id='formControlLg' type='email' size="lg"/>
            <MDBInput className='inp-login' wrapperClass='mb-4' onChange={(e) =>setPassword(e.target.value)} label='password' id='formControlLg' type='password' size="lg"/>
        
          </div> 
          
          <div className="d-flex justify-content-between mb-4">
            
            <MDBCheckbox name='flexCheck' value={Urider}  onClick={()=>AreuRider()} id='flexCheckChecked' label='Are You a Rider' />
            
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            
           {(!Urider) ?
             <MDBBtn className="mb-0 px-5 btn-login " color='success' onClick={LoginWithNoEmail} size='lg'>Login </MDBBtn>
             :<MDBBtn className="mb-0 px-5 btn-login " color='primary' onClick={LoginWithRider} size='lg'>LoginWithRider </MDBBtn>
           }
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
            

          </div>

        </MDBCol>

      </MDBRow>
      {/* Modal */}
      
      <MDBModal open={basicModal} setopen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{loading ? <>`<h1>Signup SUCCESSFULY</h1>`</> :null}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container"
                ></OtpInput>
              <div style={{ marginTop: "10px"}} id="recaptcha"></div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn  color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={verifyOtp}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      
      

      

    </MDBContainer>
    <div className="Botton">
          <Footer/>
      </div>
    </>
  );
}
