import React from "react";


import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import "./footer.css";
export default function Footer(){
  const current = new Date();
  const date = `${current.getFullYear()}`;
    return(
        <div class="container-foot">
            
              <div class="">
                
                <span class="foot-text">&copy; {date} Saath Challo</span>
              </div>

              <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="/"><FaInstagram size={"2em"} color="white" /></a></li>
                <li class="ms-3"><a class="text-muted" href="/"><FaXTwitter size={"2em"} color="white" /></a></li>
                <li class="ms-3"><a class="text-muted" href="/"><FaFacebookSquare size={"2em"} color="white" /></a></li>
              </ul>
            
        </div>
    )
}
