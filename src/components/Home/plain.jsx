import React from "react";
import "./headers.css";
import plus from "../../assets/plus.png";
import profilePic from "../../assets/proflic-pic.png";
import { Link, useNavigate } from "react-router-dom";
export default function Headers(){
    return(
        <div className="head">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Saath me Chalo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nv-right-ele navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="create-ride-nav nav-item">
        <img className="image-plus" src={plus} alt = "plus"/>
          <a class="a-create nav-link" href="#">Create a Ride</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className="image-plus" src={profilePic} alt = "plus"/>
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to='/login'>Login</Link></li>
            <li><a class="dropdown-item" href="#">Register</a></li>
            
          </ul>
        </li>
        
      </ul>
      <form class="search d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
