import React from "react";
import Headers from "../Header/headers";
import "./RideFeed.css";
import FeedCard from "./FeedCard";
export default function RideFeed(){
    return(
        <div className="rFeed">
            <Headers/>
            
            <div className="form-submit">
                <input className="inp input-from" type="text" placeholder="from" name="from"/>
                <input className="inp input-to" type="text" placeholder="to" name="to"/>
                <input className="inp input-to" type="date" placeholder="date" name="date"/>
                <input className="inp input-to" type="number" placeholder="number" name="number"/>
                <button className="inp search-form btn btn-primary">Search</button>
                
            </div>
            <h2 className="text-feed">Today</h2>
            <div className="cards-left">
                <FeedCard name="Kulbir" from = "Delhi" to = "Chandigarh" price = "460" timeStrt = "18:45" timeEnd = "22:55" rating = "2.5"/>
            </div>
        </div>
    )
}