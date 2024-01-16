import React from "react";
import Headers from './Header/headers';
import './bookRide.css'
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
    </div>
  )
}