import React ,{useState} from "react";
import "./main.css";
import mainIimg from "../../assets/carpool.svg"

// import {dp} from "../assets/UberPOOL-Launch_Digital-Assets_Amber_blog_960x480_r1.avif";
export default function Main(){
  const [SourcePlace,setSourcePlace] = useState("");
  const [DestinationPlace,setDestinationPlace ] = useState("");
  const [dateOfTrip,setdateOfTrip] = useState("");
    const onhandle =async (e)=>{
        try{
            // e.preventDefault();
        if(SourcePlace==="" || DestinationPlace===""){
            alert("Please fill all the fields");
            return;
        }
       let res= await fetch("http://localhost:4000/tripdet/getpath",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                SourcePlace,
                DestinationPlace,
                dateOfTrip
            })
        });
        if(res.ok){
            const data = await res.json();
            console.log(data);
        }
        console.log(SourcePlace);
        console.log(DestinationPlace);
        console.log(dateOfTrip);
       
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