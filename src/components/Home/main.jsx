import React ,{useState} from "react";
import "./main.css";
import mainIimg from "../../assets/carpool.svg"
import { Server } from "../Server/Server";
import { useNavigate } from "react-router-dom";



// import {dp} from "../assets/UberPOOL-Launch_Digital-Assets_Amber_blog_960x480_r1.avif";
export default function Main(){
  const [SourcePlace,setSourcePlace] = useState("");
  const [DestinationPlace,setDestinationPlace ] = useState("");
  const [dateOfTrip,setdateOfTrip] = useState("");
    const navigator = useNavigate();
    const onhandle =async (e)=>{
        try{
            // e.preventDefault();dfhdx
        if(SourcePlace==="" || DestinationPlace===""){
            alert("Please fill all the fields");
            return;
        }
        navigator("/rideHome",{state:{SourcePlace,DestinationPlace,dateOfTrip}});       
    }catch(error){
        console.log(error);
    } 
}
    return(
        <div className="main">
            
            <img className="img-main" src={mainIimg} alt = "img"/>
            <div className="form-submit">
                <input className="inp input-from" type="text"onChange={(e) => setSourcePlace(e.target.value)}placeholder="from" name="from"/>
                <input className="inp input-to" type="text"  onChange={(e) => setDestinationPlace (e.target.value)} placeholder="to" name="to"/>
                <input className="inp-media-from inp input-to" onChange={(e) => setdateOfTrip(e.target.value)}type="date" placeholder="date" name="date"/>
                <input className="inp input-to" type="number" placeholder="number" name="number"/>
                <button className="inp search-form btn btn-primary"onClick={()=>onhandle()}>Search</button>
                
            </div>
        </div>
    )
}