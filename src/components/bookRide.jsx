import React from "react";
import Headers from './Header/headers';
import './bookRide.css'
import Footer from "./Footer/Footer";
import { FaMessages, FaMugHot } from "react-icons/fa";
export default function BookRide(){
  return(
    <div className="book-ride">
      <Headers/>
      <h1 className="b-r-h1">Sun, 17 December</h1>
      <div className="dot-up" style={{width: 10, height: 10, background: 'white', borderRadius: 9999, border: '1px #054652 solid'}} />
      <div className="dot-down" style={{width: 10, height: 10, background: 'white', borderRadius: 9999, border: '1px #054652 solid'}} />
      <div className="top-card">
      
        <p className="strt-time">19:50</p>
        <h4 className="strt-src">Rzw 277, Mahipalput - Rangpuri Rd, New Delhi, Delhi</h4>
        <p className="src-state">New Delhi</p>
        <hr className="hr-vertical"></hr>
        <p className="end-time">01:20</p>
        <h4 className="dest">Chandigarh Bus Terminal, ISBT Road, 17G, 17F, Sector 17,<br/>Chandigarh</h4>
        <p className="dest-state">Chandigarh</p>
      </div>
      <div className="mid-card-book">
        <div className="sep-top-book" style={{width: 997.33, height: 8, background: '#EDEDED', borderRadius: 16}} />
        <h4 className="price-p">Total price for 1 passenger</h4>
        <h4 className="price-p-amount">₹600.00</h4>
        <div className="sep-btm-book" style={{width: 997.33, height: 8, background: '#EDEDED', borderRadius: 16}} />
      </div>
      <div className="info-card">
        <h5 className="info-p">RiderA</h5>
        <div className="sep-btm-info" style={{width: 997.33, height: 5, background: '#EDEDED', borderRadius: 16}} />
        <h5 className="ask-p">Ask RiderA a question</h5>
        <div className="sep-btm-ask" style={{width: 997.33, height: 5, background: '#EDEDED', borderRadius: 16}} />
        <h5 className="car-type">HYUNDAI AURA</h5>
        <p className="color-p">White</p>
      </div>
      <div className="bottom-card-book">
        <hr className="rule"></hr>
        <button className="book-book btn btn-primary">Book⚡</button>
      </div>
      <div className="foot-book">
        <Footer/>
      </div>
    </div>
  )
}