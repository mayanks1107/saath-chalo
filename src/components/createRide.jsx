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
        Distance:"",
        VehicleName:"",
        vehColor: "",
      })
     const [TypeofTrip,settypeofTrip]=useState("1way");
      const navigate = useNavigate();
    const handleChange= async()=>{
        var Name=JSON.parse(localStorage.getItem("token")).FullName;
        let Email=JSON.parse(localStorage.getItem("token")).Email;
        console.log(Email);
        console.log(Value.PhoneNumber);
        
        try {
            let response =await axios.post(`${Server}/tripdet`,{
            Name:Name,
            Email:Email,
            VehicleNumber:Value.vehicleNumber,
            VehicleColor:Value.vehColor,
            SourcePlace:Value.SourcePlace,
            DestinationPlace:Value.DestinationPlace,
            typeOfTrip:Value.typeOfTrip,
            dateOfTrip:Value.dateOfTrip,
            timeOfTrip:Value.timeOfTrip,
            availableSeat:Value.availableSeat,
            Distance:Value.Distance,
            PhoneNumber:Value.PhoneNumber,
            IsRider:true
        })
        console.log(response.data);
                        toast.success(response.data);
                        // setTimeout(navigate('/rideRequest'),200000)
        } catch (error) {
            console.log(error);  
        }            
    }
    function notLogin(){
       
        navigate('/register');
    }
    function notRider(){
        toast.error("You are not Rider")
        // setTimeout(, 5000);
        navigate('/register');
    }
   
    
    const CheckData =()=>{
        if(localStorage.getItem("token")!=null){
        jsonObject = JSON.parse(localStorage.getItem("token"));
        if(!JSON.parse(localStorage.getItem("token")).IsRider){
            
            // notRider();
            var delayInMilliseconds = 3*1000; // 1 second
            toast.error("Soory You  are Not Rider");
            setTimeout(function() {
                //your code to be executed after 1 second
                notRider();
            }, delayInMilliseconds);
           
        }
        }else{
            // notLogin
            var delayInMilliseconds = 1*1000; //1 second
            toast.error("Please Login First");
            setTimeout(function() {
                //your code to be executed after 1 second
                notLogin();
            }, delayInMilliseconds);
           
        }
    }
    useEffect(()=>{
        CheckData()
       },[]) 
    return (
        <div class='create-ride'>
            <Headers/>
             <Toaster toastOptions={{ duration: 160000 }} />
             <img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'} alt='img-create' class='img-create'/>
            <div class='form-create'>
            
                <br/>
                <br/>
                <label class='first-lab label-veh' for="vehicleNumber">Vehicle Number</label>
                <input class='v-no input-create' type="text"  onChange={(e)=>setValues((prev)=>({...prev ,vehicleNumber:e.target.value}))} name="vehicleNumber" id="vehicleNumber" placeholder='Vehicle Number'/>
                <br/>
                <br/>
                <label class='label-veh' for="source">Source</label>
                <input class='so input-create' type="text"  onChange={(e)=>setValues((prev)=>({...prev ,SourcePlace:e.target.value}))} name="source" id="source" placeholder='Source' />
                <br/>
                <br/>
                <label class='label-veh' for="destination">Destination</label>
                <input class='desti input-create' type="text"  onChange={(e)=>setValues((prev)=>({...prev ,DestinationPlace:e.target.value}))}name="destination" id="destination" placeholder='Destination' />
                <br/>
                <br/>
                <label class='label-veh' for="typeOfTrip">Type Of Trip</label>
                {/* <input class='trip input-create' type="checkbox"  onChange={(e)=>setValues((prev)=>({...prev ,typeOfTrip:e.target.value}))} name="typeOfTrip" id="typeOfTrip" placeholder='1 way / 2 way'/> */}
                <input class='trip input-create' type="check"  onChange={(e)=>setValues((prev)=>({...prev ,typeOfTrip:e.target.value}))} name="typeOfTrip" id="typeOfTrip" placeholder='1 way / 2 way'/>
                <br/>
                <br/>
                <label class='label-veh' for="dateOfTrip">Date Of Trip</label>
                <input class='date input-create' type="date" onChange={(e)=>setValues((prev)=>({...prev ,dateOfTrip:e.target.value}))} name="dateOfTrip" id="dateOfTrip" placeholder='Date'/>
                <br/>
                <br/>
                <label class='label-veh' for="timeOfTrip">Time Of Trip</label>
                <input class='time input-create' type="time"  onChange={(e)=>setValues((prev)=>({...prev ,timeOfTrip:e.target.value}))} name="timeOfTrip" id="timeOfTrip" placeholder='Time'/>
                <br/>
                <br/>
                <label class='label-veh' for="availableSeat">Available Seat</label>
                <input class='av-seat input-create' type="number" onChange={(e)=>setValues((prev)=>({...prev ,availableSeat:e.target.value}))} name="availableSeat" id="availableSeat" placeholder='Available Seat'/>
                <br/>
                <br/>
                <label class='label-veh' for="Distance">Distance </label>
                <input class='disti input-create' type="text" onChange={(e)=>setValues((prev)=>({...prev ,Distance:e.target.value}))} name="Distance" id="Distance" placeholder='Distance'/>
                <br/>
                <br/>

                <label class='label-veh' for="phoneNumber">PhoneNumber</label>
                <input class='av-phone input-create' type="number"  onChange={(e)=>setValues((prev)=>({...prev ,PhoneNumber:e.target.value}))} name="phoneNumber" id="phoneNumber" placeholder='Phone Number'/>
                <br/>
                <br/>
                <label class='label-veh' for="Vehicle_Color">Vehicle Color</label>
                <input class='veh-color input-create' type="text" onChange={(e)=>setValues((prev)=>({...prev ,vehColor:e.target.value}))} name="Vehicle_Color" id="Vehicle_Color" placeholder='Vehicle Color'/>
                <br/>
                <br/>
                
                
            </div>
                <MDBBtn class="mb-45 py-45 px-5 create-btn btn-login" onClick={handleChange} size='lg'>Create  Ride</MDBBtn>                      
            <Footer class="foot"/>
        </div>
    )
}

export default CreateRide