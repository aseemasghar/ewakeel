import React from 'react'
import './MyProfile.css'
import ClientNav from './ClientNav.js'

const MyProfile = () => {
  return (
    <>
    <ClientNav/>

    <div className="container">
    
    <div class="my-2 card">
  <img src={require('../images/card-image.png')} alt="User"/>
  <h1>Ali Raza</h1>
  <p class="title">ali@gmail.com</p>
  <p>03125678323</p>
  <p><button>Contact Me</button></p>
</div>

<div class="my-3 contact">
  <h4 class="p-4 rounded text-light bg-secondary"><i class="fa-solid fa-address-book"></i> Contact Details</h4>
  <div class="m-3 row">
    <h5 class="col"><i class="fa-solid fa-envelope"></i> Email : ali@gmail.com</h5>
    <h5 class="col"><i class="fa-solid fa-phone"></i> Phone : 03453465789</h5>
  </div>
</div>

<div class="adress">
  <h4 class="p-4 rounded text-light bg-secondary"><i class="fa-solid fa-address-card"></i> Address</h4>
  <div class="row m-3">
    <h5 class="col"><i class="fa-solid fa-location-dot"></i> Address : Stret no 23 H-10 Islamabd</h5>
    <h5 class="col"><i class="fa-solid fa-location-dot"></i> City : Islamabad</h5>
  </div>
  <div class="row m-3">
    <h5 class="col"><i class="fa-solid fa-location-dot"></i> State : Punjab</h5>
    <h5 class="col"><i class="fa-solid fa-location-dot"></i> Country : Pakistan</h5>
  </div>
</div>



</div>

</>
  )
}

export default MyProfile







