import React,{useState } from 'react';
import {auth} from '../../Firbase/firbase';
import {RecaptchaVerifier, signInWithPhoneNumber,signInWithEmailAndPassword} from 'firebase/auth';
import {MDBContainer, MDBCol, MDBRow,
    MDBBtn,
    MDBIcon, MDBInput, MDBCheckbox,MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter } from 'mdb-react-ui-kit';
import OtpInput from "otp-input-react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { toast, Toaster } from "react-hot-toast";

import "./login.css"

export default function Login() {
  const [basicModal, setBasicModal] = useState(false);
  const [phoneModal, setphoneModal] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);
  const phoneOpen = () => setphoneModal(!phoneModal);

  const [phone,setPhone] = useState(null);
  const [Email,setEmail] = useState(null);
  const [Password,setPassword]= useState(null);

  const [user,setUser] = useState(null);
  const [otp,setOtp] = useState("");

  // const [user2, setUser2] = useState(null);
  const [loading, setLoading] = useState(false);


const sendOTp = async() => {
  toggleOpen();
  console.log(phone);
    try {
        const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
        const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
        toast.success('OTP SENT SUCCESSFULY');
        setUser(confirmation);

    } catch (error) {
        console.log(error);
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
const  checkEMailAndpassword = ()=>{
  if (Email==null||Password==null) {
    toast.error(" Email or password is Missing ");
    
  }else{
       signInWithEmailAndPassword(auth,Email,Password).then(async(res)=>{
       console.log('OK');
       
      // navigate('/succes',{state:{user:Email}})
      toast.success('User created');
 
    }).catch((erro)=>{
    console.log(erro);
    });
  }
}

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
        <Toaster toastOptions={{ duration: 4000 }} />
      <MDBRow>

        <MDBCol col='10' md='6'>
         {/* eslint-disable-next-line */}
          <img className='log-img' src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'} class="img-fluid" alt="Sample image" />
        </MDBCol>
        <MDBCol className='right-container' col='4' md='6'>

          <div className="r d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

          </div>

          {/* <div class="vl-3"></div> */}

          <div className="divider d-flex align-items-center my-4">
            <p className="or text-center fw-bold mx-3 mb-0"></p>
          </div>

          {/* <div class="vl-2"></div> */}
          {
            phoneModal ? 
            <>
            <PhoneInput country={"in"} value={phone} onChange={(phone) => setPhone("+" + phone)}/><br/>
            <MDBInput className='inp-login' wrapperClass='mb-4'onChange={(e) => setEmail(e.target.value)} label='Emailid' id='formControlLg' type='email' size="lg"/>
          </>:
            <>
            <MDBInput className='inp-login' wrapperClass='mb-4' onChange={(e) =>setPassword(e.target.value)} label='password' id='formControlLg' type='password' size="lg"/>
            <MDBInput className='inp-login' wrapperClass='mb-4' onChange={(e) =>setEmail(e.target.value)} label='Emailid' id='formControlLg' type='email' size="lg"/>
        
          </> 
          }
          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Didn't received OTP ?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            {phoneModal ? 
            <>
             <MDBBtn className="mb-0 px-5 btn-login" onClick={sendOTp} size='lg'>Login </MDBBtn>
            </>
            :<>
              <MDBBtn className="mb-0 px-5 btn-login" onClick={checkEMailAndpassword} size='lg'>Login</MDBBtn>
            </>
            }        
              <MDBBtn className="mb-0 px-5" onClick={()=>phoneOpen()} size='lg'>Login with Otp</MDBBtn>

            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link class="link-danget" to="/register">Register</Link></p>
          </div>

        </MDBCol>

      </MDBRow>
      {/* Modal */}
      
      <MDBModal open={basicModal} setopen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{loading ? <>`<h1>sign succfull</h1>`</> :null}</MDBModalTitle>
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

      
      

      <div className="footer d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div>

    </MDBContainer>
  );
}

