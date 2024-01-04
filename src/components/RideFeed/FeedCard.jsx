import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./RideFeed.css";
import pic from "../../assets/proflic-pic.png";
export default function FeedCard(props){
    return(
        <div className="fCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title from">{props.from}</h5>
                <hr id="myhr"></hr>
                <h5 class="card-title to">{props.to}</h5>
                <p class="card-text price">₹{props.price}.00</p>
                <p class="card-text strt">{props.timeStrt}</p>
                <p class="card-text end">{props.timeEnd}</p>
                {/* <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a> */}
                <img className = "pic" src = {pic} alt = "profile pic"/>
                <p class="card-text name">{props.name}</p>
                <p class="card-text rating">{props.rating}⭐</p>
              </div>
            </div>
        </div>
    )
}