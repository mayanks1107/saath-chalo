import React from "react";
import Headers from "../Header/headers";
import "./confirm.css"
import Footer from "../Footer/Footer";
export default function Confirm(){
    return(
        <div className="con">
            <Headers/>
            <div className="map-comp">
                {/* map goes here!! */}
            </div>
            <div className="rider-details-comp">
                <h3 className="rider-name-head">Rider Name: </h3>
                <p className="rider-name-p">Dummy Name</p>
                <br/>
                <h3 className="vehicle-number-head">Vehicle Number: </h3>
                <p className="vehicle-number-p">Dummy Number</p>
                <br/>
                <h3 className="vehicle-name-head">Vehicle Name: </h3>
                <p className="vehicle-name-p">Dummy Name</p>
                <br/>
                <h3 className = "vehicle-color-head">Vehicle Color: </h3>
                <p className="vehicle-color-p">Dummy Color</p>
                <br/>
                <h3 className="location-head">Pick up location: </h3>
                <p className="location-p">Dummy location</p>
                <br/>
                <h3 className="location-head">Drop-off location: </h3>
                <p className="location-p">Dummy location</p>
                <br/>
                <h3 className="rider-name-head">No. of seats left: </h3>
                <p className="rider-name-p">Dummy Number</p>
                <br/>
                <h3 className="rider-name-head">Far from you: </h3>
                <p className="rider-name-p">Dummy Number</p>
                <br/>
                <h3 className="rider-name-head">Time to reach: </h3>
                <p className="rider-name-p">Dummy Time</p>
            </div>
            <div className="foot-con">
                <Footer/>
            </div>
        </div>
    )
}