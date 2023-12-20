import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";
export default function Footer(){
    return(
        <div class="container-foot">
            
              <div class="">
                
                <span class="foot-text">&copy; 2023 Saath Challo</span>
              </div>

              <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li class="ms-3"><a class="text-muted" href="/"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li class="ms-3"><a class="text-muted" href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
              </ul>
            
        </div>
    )
}
