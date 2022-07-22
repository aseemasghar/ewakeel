import React from 'react'
import './ClientNav.css'
import { Link } from 'react-router-dom'

const ClientNav = () => {
  return (
    <>
  <nav class="navbar navbar-expand-lg sticky-top  navbar-dark bg-dark">
  <Link class="navbar-brand mx-2" to="/my-account"><i class="fa-solid fa-scale-balanced"></i> EWakeel</Link>
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/my-account"><i class="bi bi-person"></i> My Profile</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/profile-settings"> <i class="bi bi-gear"></i> Profile Settings</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/post-a-case"><i class="bi bi-briefcase"></i> Post a Case</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/my-cases"><i class="bi bi-briefcase"></i> My Cases</Link>
      </li>

    </ul>
    <span class=" navbar-text">
      <h6 className=''>Welcome User</h6>
      <input className='' type="button" value="Logout" />
    </span>
   
  </div>
</nav>   
    </>
  )
}

export default ClientNav


