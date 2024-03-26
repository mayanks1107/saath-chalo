import React from "react";
import Headers from "../Header/headers";
import "./profile.css";
import Footer from "../Footer/Footer";
export default function Profile(){
    return (
        <div className = "profile">
            <Headers/>
            <h1 className="profile-h1">Profile</h1>
            <div className="profile-info">
                <h3 className="profile-h3">Gender:  </h3>
                <p className="profile-p">Dummy Gender</p>
                <br/>
                <h3 className="profile-h3">Destination Place:</h3>
                <p className="profile-p">Dummy Destination</p>
                <br/>
                <h3 className="profile-h3">Type of Trip</h3>
                <p className="profile-p">Dummy type</p>
                <br/>
                <h3 className="profile-h3">Date of Trip</h3>
                <p className="profile-p">Dummy date</p>
                <br/>
                <h3 className="profile-h3">Time of Trip</h3>
                <p className="profile-p">Dummy Time</p>
            </div>
            <div className="profile-foot">
                <Footer/>
            </div>
        </div>
    )
}