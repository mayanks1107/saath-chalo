import React from "react";
import "./Safety.css";
import what from "../../assets/what.png"
export default function Safety(){
    return(
        <div className="safety">
            <h1 className="saf-h1">Safety comes first for us</h1>
            <p className="saf-p">At Saath-Challo, we are dedicated to enhancing the security of our platform. However, in the rare instance of scams, it's crucial to be informed about how to prevent and report them. Follow our guidelines to assist us in ensuring your safety.</p>
            <div className="what">
                <h1>What is Saath-Challo :- Carpool & Bikepool</h1>
                <p className="what-p">We all enjoy traveling together. Saath-Challo facilitates connections with similarly-minded verified professionals who share your route and schedule. Saath-Challo encourages commuters to opt for shared rides instead of traveling solo. Utilizing innovative technology, the platform streamlines the process of discovering, connecting, coordinating, and cost-sharing. Saath-Challo automates the entire carpooling and bikepooling process, ensuring safety and convenience for commuters. Experience an enjoyable daily office commute with Saath-Challo.</p>
                <img className="what-img" src={what} alt = "what"/>
            </div>
        </div>
    )
}