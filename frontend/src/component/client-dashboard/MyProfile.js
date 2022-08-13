import React from 'react'
import './MyProfile.css'
import ClientNav from './ClientNav.js'
// import { useEffect} from "react";
import {  useSelector } from "react-redux";
// import { loadUser } from '../../Actions/User';
import Footer from '../Footer/Footer';

const MyProfile = () => {

  // const dispatch = useDispatch();
  const { user} = useSelector((state) => state.user);
  

  return (
    <>
    <ClientNav/>

    <div className="container">
    
    <div className="my-2 card">
  <img src={user.avatar.url} alt="User"  />
  <h1>{user.name}</h1>
  <p className="title">{user.email}</p>
  <p>{user.phone}</p>

</div>

<div className="my-3 contact">
  <h4 className="p-4 rounded text-light bg-secondary"><i className="fa-solid fa-address-book"></i> Contact Details</h4>
  <div className="m-3 row">
    <h5 className="col"><i className="fa-solid fa-envelope"></i> {user.email}</h5>
    <h5 className="col"><i className="fa-solid fa-phone"></i> {user.phone}</h5>
  </div>
</div>

<div className="adress">
  <h4 className="p-4 rounded text-light bg-secondary"><i className="fa-solid fa-address-card"></i> Address</h4>
  <div className="row m-3">
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> Address : {user.address}</h5>
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> City : {user.city}</h5>
  </div>
  <div className="row m-3">
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> State : {user.province}</h5>
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> Country : {user.country}</h5>
  </div>
</div>



</div>
<Footer/>
</>
  )
}

export default MyProfile







