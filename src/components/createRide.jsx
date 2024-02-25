import React,{useEffect, useState}from 'react'
import './createRide.css';
import axios from 'axios'
import Headers from './Header/headers';
import Footer from './Footer/Footer'
import { toast, Toaster } from "react-hot-toast";
import {MDBBtn} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import {Server} from "./Server/Server"
function CreateRide() {
    var jsonObject;
    const [Value,setValues] =useState({
        vehicleNumber:"",
        SourcePlace:"",
        DestinationPlace:"",
        typeOfTrip:"",
        dateOfTrip:"",
        timeOfTrip:"",
        availableSeat:"",
        PhoneNumber:"",
        vehColor: ""
      })
    //  const [GetlocalData,setlocalData]=useState();
      const navigate = useNavigate();
    const handleChange= async()=>{
        var Name=jsonObject.Fullname;
        
        
        try {
            let response =await axios.post(`${Server}/tripdet/post`,{
            Name:Name,
            vehicleNumber:Value.vehicleNumber,
            VehicleColour:Value.vehColor,
            SourcePlace:Value.SourcePlace,
            DestinationPlace:Value.DestinationPlace,
            typeOfTrip:Value.typeOfTrip,
            dateOfTrip:Value.dateOfTrip,
            timeOfTrip:Value.timeOfTrip,
            availableSeat:Value.availableSeat,
            PhoneNumber:Value.availableSeat,
            IsRider:true
        })
        console.log(response.data);
                        toast.success(response.data);
        } catch (error) {
            console.log(error);  
        }            
    }
    const CheckData =()=>{
        if(localStorage.getItem("token")!=null){
        jsonObject = JSON.parse(localStorage.getItem("token"));
        if(!jsonObject.IsRider){
            toast.error("You Are Not Rider");
            setTimeout(navigate('/register'),200000)
            // setInterval(navigate('/register'),200000);
        }
        }else{
            toast.error("Not Found"); 
            setInterval(navigate('/register'),2000000000);
        }
    }
    useEffect(()=>{
        CheckData()
       },[]) 
    return (
        <div className='create-ride'>
            <Headers/>
             <Toaster toastOptions={{ duration: 4000 }} />
            <div className='form-create'>
                <label for="vehicleNumber">Vehicle Number</label>
                <input className='v-no input-create' type="text"  onChange={(e)=>setValues((prev)=>({...prev ,vehicleNumber:e.target.value}))} name="vehicleNumber" id="vehicleNumber" placeholder='Vehicle Number'/>
                <br/>
                <br/>
                <label for="source">Source</label>
                <input className='so input-create' type="text"  onChange={(e)=>setValues((prev)=>({...prev ,SourcePlace:e.target.value}))} name="source" id="source" placeholder='Source' />
                <br/>
                <br/>
                <label for="destination">Destination</label>
                <input className='desti input-create' type="text"  onChange={(e)=>setValues((prev)=>({...prev ,DestinationPlace:e.target.value}))}name="destination" id="destination" placeholder='Destination' />
                <br/>
                <br/>
                <label for="typeOfTrip">Type Of Trip</label>
                <input className='trip input-create' type="check"  onChange={(e)=>setValues((prev)=>({...prev ,typeOfTrip:e.target.value}))} name="typeOfTrip" id="typeOfTrip" placeholder='1 way / 2 way'/>
                <br/>
                <br/>
                <label for="dateOfTrip">Date Of Trip</label>
                <input className='date input-create' type="date" onChange={(e)=>setValues((prev)=>({...prev ,dateOfTrip:e.target.value}))} name="dateOfTrip" id="dateOfTrip" placeholder='Date'/>
                <br/>
                <br/>
                <label for="timeOfTrip">Time Of Trip</label>
                <input className='time input-create' type="time"  onChange={(e)=>setValues((prev)=>({...prev ,timeOfTrip:e.target.value}))} name="timeOfTrip" id="timeOfTrip" placeholder='Time'/>
                <br/>
                <br/>
                <label for="availableSeat">Available Seat</label>
                <input className='av-seat input-create' type="number" onChange={(e)=>setValues((prev)=>({...prev ,availableSeat:e.target.value}))} name="availableSeat" id="availableSeat" placeholder='Available Seat'/>
                <br/>
                <br/>
                <label for="phoneNumber">Phone Number</label>
                <br/>
                <br/>
                <label for="availableSeat">Vehicle Color</label>
                <input className='veh-color input-create' type="text" onChange={(e)=>setValues((prev)=>({...prev ,vehColor:e.target.value}))} name="vehColor" id="vehColor" placeholder='Vehicle Color'/>
                <br/>
                <br/>
                <input className='phone input-create' type="number"  onChange={(e)=>setValues((prev)=>({...prev ,PhoneNumber:e.target.value}))} name="phoneNumber" id="phoneNumber" placeholder='Phone Number'/>
                <img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'} alt='img-create' className='img-create'/>
            </div>
                <MDBBtn className="mb-45 py-45 px-5 btn-login" onClick={handleChange} size='lg'>Create  Ride</MDBBtn>
            <Footer className="foot"/>
        </div>
    )
}

export default CreateRide