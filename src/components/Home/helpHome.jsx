import React from "react";
import "./HelpHome.css";
import safe from "../../assets/safe.jpg";
import traffic from "../../assets/traffic.jpg";
import friends from "../../assets/friends.png";
export default function HelpHome(){
    return (
        <div className="helpHome">
            <h1 className="hh-h1">Carpool Help Centre</h1>
            <h2 className="hh-h2">Why Should We Carpool?</h2>
            <p className="hh-p">Encouraging widespread carpooling would significantly reduce the number of vehicles on the road, resulting in decreased carbon emissions, less pollution, and a more environmentally friendly atmosphere.</p>
            <h3 className="hh-h3 h3-safe">Safe Environment</h3>
            <img className="safe hh-img" src = {safe} alt="safe Env"/>
            <h3 className="hh-h3 h3-traffic">Reduce Traffic</h3>
            <img className="traffic hh-img" src = {traffic} alt="traffic"/>
            <h3 className="hh-h3 h3-friends">Make friends</h3>
            <img className="friends hh-img friend-img" src = {friends} alt="friends"/>
        </div>
    )
}