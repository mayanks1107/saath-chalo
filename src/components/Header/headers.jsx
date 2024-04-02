import React, { useEffect, useState } from "react";
import "./headers.css";
// import plus from "../../assets/plus.png";
// import profilePic from "../../assets/proflic-pic.png";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import a from "../../assets/logo-green.png";
export default function Headers(){
  var jsonObject;
  const navigate = useNavigate()

  const [isLogin,setisLogin] = useState(false);
  const [uareRiders,setRider] = useState(false);
  const [ureUser,setUser] = useState(false);
  
  function logout(){
    localStorage.clear();
    navigate('/')
    window.location.reload();
  }
  const CheckData =()=>{
    if(localStorage.getItem("token")!=null){
      setisLogin(true);
      jsonObject = JSON.parse(localStorage.getItem("token"))
      // console.log(jsonObject); 
      if(jsonObject.IsRider){
        setRider(true);
      }else{
        setUser(true);
      }
      
      // if(localStorage.getItem("token").){
      // }
  }
}
useEffect(()=>{
  setTimeout( CheckData(),2000)
    
    console.log("u are login"+isLogin);
   },[]) 
    return(
        <div className="head">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand logo-brand" href="/"><img className="logo-brand" src={a} alt = "logo"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nv-right-ele navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="create-ride-nav nav-item">
        {/* <img className="image-plus" src={plus} alt = "plus"/> */}
        <div className="bor-rad">
            <CiCirclePlus color="green" size={"2.4em"}/>
          <a class="a-create nav-link" href="/createRide">Create a Ride</a>
          </div>
        </li>
        <li class="media-log nav-item dropdown">
          <a class="nav-link dropdown-toggle" style={{marginTop: "14px", marginLeft:"5px"}} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {/* <img className="image-plus" src={profilePic} alt = "plus"/> */}
          <FaUser className="user-icon" size={"2rem"}/>
          </a>
          <ul class="media-drop dropdown-menu">
            <li><Link class="dropdown-item" to='/gmail' state="login" >Login</Link></li>
            <li><Link class="dropdown-item" to='/gmail' state="register">Register</Link></li>
            {uareRiders===false ?null:
            <li><Link class="dropdown-item" to="/riderprofile">Profile</Link></li>
            }
            {ureUser===false ?null:
            <li><Link class="dropdown-item" to="/userprofile">Profile</Link></li>
            }
              
            {isLogin===false ?null:
            <li><button className="logout-btn" onClick={logout}>logout</button></li>
            }
          </ul>
        </li>
        
      </ul>
      <form class="search d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
