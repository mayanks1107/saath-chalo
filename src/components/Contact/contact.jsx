import React from "react";
import Headers from "../Header/headers";
import location from "../../assets/location.jpg";
import phone from "../../assets/phone.png";
import "./contact.css";
import fax from "../../assets/fax.jpg";
import email from "../../assets/emai;.jpg";
import Footer from '../Footer/Footer';
export default function Contact(){
    return(
        <div className = "contact">
            <Headers/>
            <div className="contact-body">
                <div className="card-1">
                    <img className="img-contact" src={location} alt = "location"/>
                    <h2>OUR MAIN OFFICE</h2>
                    
                    <p>SoHo 94 Brodway St<br/>New York, NY, 1001</p>
                </div>
                <div className="card-2">
                    <img className="img-contact phone-img" src={phone} alt = "phone"/>
                    <h2>PHONE NUMBER</h2>
                    
                    <p>234-9876-5400<br/>8858-0123-854 (Toll Free)</p>
                </div>
                <br/>
                <div className="card-3">
                    <img className="img-contact fax-img" src={fax} alt = "fax"/>
                    <h2>FAX</h2>
                    
                    <p>1-234-5678-9000</p>
                </div>
                <div className="card-4">
                <img className="img-contact email-img" src={email} alt = "email"/>
                    <h2>EMAIL </h2>
                    
                    <p>hello@gmail.com</p>
                </div>
                <div className="email-card">
                <h1 className="cont-h1">Contact</h1>
                <input className="inp-cont" placeholder="Enter your name" type = "text" name = "name"/>
                <br/>
                <input className="inp-cont" placeholder="Enter email address" type = "email" name = "email"/>
                <br/>
                <textarea className="inp-cont"/>
                <br/>
                <button className="cont-sub btn btn-primary">Submit</button>
            </div>
            </div>
            
            <Footer/>
        </div>
    )
}