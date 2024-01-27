import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./RideFeed.css";
import pic from "../../assets/proflic-pic.png";
export default function FeedCard(props){
  // console.log(props);
    return(
        <div className="fCard">
            <div class="card carda">
              <div class="card-body">
                <h5 class="card-title from">{props.SourcePlace}</h5>
                <hr id="myhr"></hr>
                <h5 class="card-title to">{props.DestinationPlace}</h5>
                <p class="card-text price">{props.PhoneNumber}</p>
                {/* <p class="card-text price">₹{props.price}.00</p> */}
                <p class="card-text strt">{props.timeOfTrip}</p>
                <p class="card-text end">{props.timeOfTrip}</p>
                {/* <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a> */}
                {/* <img className = "pic" src = {pic} alt = "profile pic"/> */}
                <p class="card-text name">{props.VehicleNumber}</p>
                <p class="card-text rating">10⭐</p>
              </div>
            </div>
        </div>
    )
}