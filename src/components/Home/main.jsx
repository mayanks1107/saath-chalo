import React from "react";
import "./main.css";
import mainIimg from "../../assets/carpool.svg"
// import {dp} from "../assets/UberPOOL-Launch_Digital-Assets_Amber_blog_960x480_r1.avif";
export default function Main(){
    return(
        <div className="main">
            
            <img className="img-main" src={mainIimg} alt = "img"/>
            <div className="form-submit">
                <input className="inp input-from" type="text" placeholder="from" name="from"/>
                <input className="inp input-to" type="text" placeholder="to" name="to"/>
                <input className="inp-media-from inp input-to" type="date" placeholder="date" name="date"/>
                <input className="inp input-to" type="number" placeholder="number" name="number"/>
                <button className="inp search-form btn btn-primary">Search</button>
                
            </div>
        </div>
    )
}