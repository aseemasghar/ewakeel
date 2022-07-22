import React from 'react'
import './LawyerNav.css'
import { Link } from 'react-router-dom'

const LawyerNav = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
  <Link class="navbar-brand mx-2" to="/myaccount">EWakeel</Link>
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/myaccount"><i class="bi bi-person"></i> My Profile</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/profilesettings"> <i class="bi bi-gear"></i> Profile Settings</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/viewallcases"><i class="bi bi-briefcase"></i> View All Cases</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/mycases"><i class="bi bi-briefcase"></i> My Cases</Link>
      </li>

    </ul>
    <span class="navbar-text">
      <h6>Welcome User</h6>
      <input type="button" value="Logout" />
    </span>
   
  </div>
</nav>  
    </>
  )
}

export default LawyerNav