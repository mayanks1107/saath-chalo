import React, { useState } from 'react';
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
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import Footer from "../Footer/Footer"
import axios from 'axios'
import Header from  "../Header/headers"
// import { auth } from '../../Firbase/firbase';
import { toast, Toaster } from "react-hot-toast";
import './regi.css'


// import { useNavigate } from 'react-router-dom';
// import {createUserWithEmailAndPassword} from "firebase/auth" 

function Signup() {
    const [Value,setValues] =useState({
      Name:"",
      Email:"",
      Password:"",
      PhoneNumber:"",
      Licenseno:"",
      Vehicleno:"",
      Rc: ""
    })
   
const Register =async()=>{
  
  try {
    console.log(Value);
    
    let response =await axios.post(`http://localhost:4000/riderlogin/post`,{
      Name:Value.Name,
      Email:Value.Email,
      Password:Value.Password,
      PhoneNumber:Value.PhoneNumber,
      Licenseno:Value.Licenseno,
      Vehicleno:Value.Vehicleno,
      Rc:Value.Rc,
      IsRider:true
})
console.log(response);


                // toast.success(response.data);
} catch (error) {
    console.log(error);  
}
}
  return (
    <>
      <Header/>
    <MDBContainer fluid>
    <Toaster toastOptions={{ duration: 4000 }} />
      
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up as a Rider</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1'onChange={(e)=>setValues((prev)=>({...prev ,Name:e.target.value}))} type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' onChange={(e)=>setValues((prev)=>({...prev ,Email:e.target.value}))} type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="unlock-alt me-3" />
                <MDBInput label='Password' onChange={(e)=>setValues((prev)=>({...prev ,Password:e.target.value}))} id='form2' type='number'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Enter OTP for Phone Number Verification'onChange={(e)=>setValues((prev)=>({...prev ,PhoneNumber:e.target.value}))} id='form2' type='number'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="address-card me-3" size='lg'/>
                <MDBInput label='License Number' onChange={(e)=>setValues((prev)=>({...prev ,Licenseno:e.target.value}))} id='form3' type='text'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="truck-fast me-3" size='lg'/>
                <MDBInput label='Vehicle Number' id='form4' onChange={(e)=>setValues((prev)=>({...prev ,Vehicleno:e.target.value}))} type='text'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="address-book me-3" size='lg'/>
                <MDBInput label='(RC) Registration Number' id='form4' onChange={(e)=>setValues((prev)=>({...prev ,Rc:e.target.value}))} type='text'/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              {/* <MDBBtn className='mb-4' size='lg'>Register</MDBBtn> */}
              {/* <MDBBtn className='mb-4' size='lg' onClick={()=>Register()}>Register</MDBBtn> */}
               <MDBBtn className='mb-4' size='lg' onClick={()=>Register()}>Register</MDBBtn> 

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      
        

      

    </MDBContainer>
    <Footer/>
    </>
  );
}

export default Signup;