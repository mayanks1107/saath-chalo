import React, { useState } from 'react';
import { auth } from '../../Firbase/firbase';
import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth" 
import 'react-phone-input-2/lib/style.css'
import { toast, Toaster } from "react-hot-toast";

import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBInput,MDBIcon,MDBCheckbox} from 'mdb-react-ui-kit';

function App() {
  
  const [Value,setValues] =useState({
    Name:"",
    Email:"",
    PhoneNumber:"",
    Otp:"",
    Password:"",
    RepeatPassword:""
  })
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [user,setUser] = useState(null);
  const [otp,setOtp] = useState("");

  // const [user2, setUser2] = useState(null);
  const [loading, setLoading] = useState(false);

  const Register =async()=>{
    // e.preventDefault();
    if (Value.Password === Value.RepeatPassword) {
      console.log('Passwords match!');
      setPasswordMatch(true);
      try {
        
        const response = await fetch(
          `http://localhost:4000/user/getboth/${Value.Email}/${Value.PhoneNumber}`
        );
        const IsPresent = await response.json();
        console.log(`IsPresent ${IsPresent}`)
        if(IsPresent == true){
          alert('Phone And Email already exists. Please choose a number and email.');
        }
        else{
                createUserWithEmailAndPassword(auth,Value.Email,Value.Password).then(async (res)=>{
                        console.log(res)
                      let response =await axios.post(`http://localhost:4000/user/post`,{
                          
                          FullName:Value.Name,
                          Email:Value.Email,
                          PhoneNumber:Value.PhoneNumber,
                          IsRider:false
                        })
                        toast.success(response.data);
                        
                
                      }).catch((erro)=>{
                        // toast.war(erro.message);
                        toast.error(erro.message)

                      });
          }
        
      } catch (error) {
        toast.error(error)
      }
    } else {
        setPasswordMatch(false);
        
    }
  }
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
      <Toaster toastOptions={{ duration: 4000 }} />
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' onChange={(e)=>setValues((prev)=>({...prev ,Name:e.target.value}))} id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' onChange={(e)=>setValues((prev)=>({...prev ,Email:e.target.value}))}id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="phone me-3" size='lg'/>
                <MDBInput label='Phone Number' onChange={(e)=>setValues((prev)=>({...prev ,PhoneNumber:e.target.value}))} id='form2' type='number'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Enter OTP for Phone Number Verification' id='form2' type='number'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' onChange={(e)=>setValues((prev)=>({...prev ,Password:e.target.value}))} type='password'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' onChange={(e)=>setValues((prev)=>({...prev,RepeatPassword:e.target.value}))}type='password'/>
                {!passwordMatch && <p style={{ color: 'red' }}>Passwords do not match!</p>}
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg' >Register</MDBBtn>
              {/* <MDBBtn className='mb-4' size='lg' onClick={Register}>Register</MDBBtn> */}

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;