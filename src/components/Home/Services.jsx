import React from "react";
import "./Services.css";
import homeImage from "../../assets/home-image-1.webp";
import shareCare from "../../assets/share-car.jpg";
export default function Services(){
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          if(entry.isIntersecting){
            entry.target.classList.add('show');
          }else{
            entry.target.classList.remove('show');
          }
        })
      })
      const hiddenEle = document.querySelectorAll('.hidden');
      hiddenEle.forEach((el) => observer.observe(el));
    return(
        <div className="service">
            <h1 className="hidden">Our Services</h1>
            <p className="hidden p-left">Discover the convenience of shared rides with Saath-Challo. Our platform connects verified professionals who share your route and schedule, making it easy to find and request a ride with similar-minded individuals</p>
            <img className="hidden home-img" src={homeImage} alt = "what"/>
            <h3 className="hidden create-p-ride">Create a ride</h3>
            <h3 className="hidden">Request a Ride</h3>
           
            <p className="hidden p-right">Saath-Challo provides a seamless way for professionals to find and request a ride with like-minded individuals. Using our innovative platform, verified members can easily connect and coordinate shared rides, reducing the cost and environmental impact of solo travel.</p>
            <img className="hidden car-img" src={shareCare} alt = "what"/>
        </div>
    )
}