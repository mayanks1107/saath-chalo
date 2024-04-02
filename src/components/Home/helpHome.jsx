import React from "react";
import "./HelpHome.css";
import safe from "../../assets/safe.jpg";
import traffic from "../../assets/traffic.jpg";
import friends from "../../assets/friends.png";
export default function HelpHome(){
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if(entry.isIntersecting){
            entry.target.classList.add('show');
          }else{
            entry.target.classList.remove('show');
          }
        })
      })
      const hiddenEle = document.querySelectorAll('.hidden');
      hiddenEle.forEach((el) => observer.observe(el));
    return (
        <div className="helpHome">
            <h1 className="hidden hh-h1">Carpool Help Centre</h1>
            <h2 className="hidden hh-h2">Why Should We Carpool?</h2>
            <p className="hidden hh-p">Encouraging widespread carpooling would significantly reduce the number of vehicles on the road, resulting in decreased carbon emissions, less pollution, and a more environmentally friendly atmosphere.</p>
            <h3 className="hidden hh-h3 h3-safe">Safe Environment</h3>
            <img className="hidden safe hh-img" src = {safe} alt="safe Env"/>
            <h3 className="hidden hh-h3 h3-traffic">Reduce Traffic</h3>
            <img className="hidden traffic hh-img" src = {traffic} alt="traffic"/>
            <h3 className="hidden hh-h3 h3-friends">Make friends</h3>
            <img className="hidden friends hh-img friend-img" src = {friends} alt="friends"/>
        </div>
    )
}