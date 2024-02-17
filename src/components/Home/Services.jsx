import React from "react";
import "./Services.css";
import homeImage from "../../assets/home-image-1.webp";
import shareCare from "../../assets/share-car.jpg";
export default function Services(){
    return(
        <div className="service">
            <h1>Our Services</h1>
            <img className="home-img" src={homeImage} alt = "what"/>
            <p className="p-left">Discover the convenience of shared rides with Saath-Challo. Our platform connects verified professionals who share your route and schedule, making it easy to find and request a ride with similar-minded individuals</p>
            <h3 className="create-p-ride">Create a ride</h3>
            <h3>Request a Ride</h3>
            <img className="car-img" src={shareCare} alt = "what"/>
            <p className="p-right">Saath-Challo provides a seamless way for professionals to find and request a ride with like-minded individuals. Using our innovative platform, verified members can easily connect and coordinate shared rides, reducing the cost and environmental impact of solo travel.</p>
        </div>
    )
}