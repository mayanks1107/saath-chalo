import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";
export default function Footer(){
    return(
        <div class="container-foot">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                  <svg class="bi" width="30" height="24"></svg>
                </a>
                <span class="foot-text">&copy; 2023 Saath Challo</span>
              </div>

              <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              </ul>
            </footer>
        </div>
    )
}
