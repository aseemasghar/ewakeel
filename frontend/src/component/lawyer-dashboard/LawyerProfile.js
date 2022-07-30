import React from 'react'
import LawyerNav from './LawyerNav'

const LawyerProfile = () => {
  return (
    <>   
   <LawyerNav/>
   <div className="container">
    
    <div className="my-2 card">
  <img src={require('../images/card-image.png')} alt="User"/>
  <h1>Ali Raza</h1>
  <p className="title">ali@gmail.com</p>
  <p>03125678323</p>
  <p><button>Contact Me</button></p>
</div>

<div className="my-3 contact">
  <h4 className="p-4 rounded text-light bg-secondary"><i className="fa-solid fa-address-book"></i> Contact Details</h4>
  <div className="m-3 row">
    <h5 className="col"><i className="fa-solid fa-envelope"></i> Email : ali@gmail.com</h5>
    <h5 className="col"><i className="fa-solid fa-phone"></i> Phone : 03453465789</h5>
  </div>
</div>

<div className="adress">
  <h4 className="p-4 rounded text-light bg-secondary"><i className="fa-solid fa-address-card"></i> Address</h4>
  <div className="row m-3">
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> Address : Stret no 23 H-10 Islamabd</h5>
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> City : Islamabad</h5>
  </div>
  <div className="row m-3">
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> State : Punjab</h5>
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> Country : Pakistan</h5>
  </div>
</div>



</div>
  
    </>
  )
}

export default LawyerProfile