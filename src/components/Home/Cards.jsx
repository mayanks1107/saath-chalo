import React, { useEffect } from "react";
// import "./cards.css"
import "./Cards.css"
export default function Cards(){
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
  useEffect(() => {
    const hiddenEle = document.querySelectorAll('.hidden');
    hiddenEle.forEach((el) => observer.observe(el));
  })
  
    return(
        <div className=" cards row">
            
            <div class="col-sm-6 col-lg-3 col-md-5 hidden ban-1 card carde">
              <div class="card-body">
                <h5 class="card-title">Your choice of transportation at affordable rates.</h5>

                <p class="card-text">Regardless of your destination, whether by bus or carpool, discover the ideal transportation option from our extensive selection of routes, all offered at budget-friendly rates.</p>

              </div>
      
           </div>
           
            <div class="col-sm-6 col-lg-3 col-md-5 hidden ban-2 c-2 card carde">
              <div class="card-body">
                <h5 class="card-title">Rely on those you journey with</h5>
                
                <p class="card-text">We invest the time to familiarize ourselves with every member and bus partner. We meticulously review reviews, profiles, and IDs, ensuring you have a clear understanding of your travel companions. Book your ride with confidence on our secure platform.</p>
                
              </div>
            
            </div>
            
            <div class="col-sm-6 col-lg-3 col-md-5  hidden ban-3 card carde">
              <div class="card-body">
                <h5 class="card-title">Scroll, click, tap, and you're on your way!</h5>
                
                <p class="card-text">Securing a ride is now effortlessly convenient! With our user-friendly app driven by cutting-edge technology, booking a nearby ride takes just minutes.</p>
                
              </div>
              </div>
            
            
        </div>
    )
}