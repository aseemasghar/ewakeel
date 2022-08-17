import React from 'react'
import AdminNav from './AdminNav'
import { useEffect } from "react";
import "../lawyer-dashboard/GetClientProfile.css";
import { getUserProfile } from "../../Actions/User";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const GetLawyer = () => {
    const dispatch = useDispatch();
    const params = useParams();
  
    useEffect(() => {
      dispatch(getUserProfile(params.id));
    }, [dispatch, params.id]);
    const {
      user,
      // loading: userLoading,
      // error: userError,
    } = useSelector((state) => state.userProfile);
  return (
    <>
    <AdminNav/>
 
    {user && (
        <>
          <div className="container">
    
    <div className="my-2 card">
  <img src={user.avatar.url} alt="Lawyer Avatar" />
  <h1>{user.name}</h1>
  <p className="title">{user.email}</p>
  <p>{user.phone}</p>
 
 
</div>

<div className="my-3 about">
  <h4 className="p-3 rounded text-light bg-secondary"><i className="fa-solid fa-user"></i> About</h4>
  <div className="m-3 row">
    <h6 className="col"><b> Company Name :</b> {user.companyName}</h6>
  
  </div>
  <div className="m-3 row">
    <h6 className="col-md-9"><b> About :</b> {user.about}</h6>
   
  </div>
 
</div>

<div className="my-3 contact">
  <h4 className="p-3 rounded text-light bg-secondary"><i className="fa-solid fa-address-book"></i> Contact Details</h4>
  <div className="m-3 row">
    <h5 className="col"><i className="fa-solid fa-envelope"></i> Email : {user.email}</h5>
    <h5 className="col"><i className="fa-solid fa-mobile-screen-button"></i> Phone : {user.phone}</h5>
  </div>
  <div className="m-3 row">
    <h5 className="col"><i className="fa-solid fa-phone"></i> Landline : {user.landline}</h5>
    <h5 className="col"><i className="fa-brands fa-skype"></i> Skype : {user.skype}</h5>
  </div>
</div>

<div className="adress">
  <h4 className="p-3 rounded text-light bg-secondary"><i className="fa-solid fa-address-card"></i> Address</h4>
  <div className="row m-3">
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> Address : {user.address}</h5>
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> City : {user.city}</h5>
  </div>
  <div className="row m-3">
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> State : {user.province}</h5>
    <h5 className="col"><i className="fa-solid fa-location-dot"></i> Country : {user.country}</h5>
  </div>
</div>
<div className="my-3 qualification">
  <h4 className="p-3 rounded text-light bg-secondary"><i className="fa-solid fa-user-graduate"></i> Qualification</h4>
  <div className="m-3 row">
    <h6 className="col"><b> Degree Name :</b> {user.degreeName}</h6>
   
  </div>
  <div className="m-3 row">
    <h6 className="col"><b> Intitute Name :</b> {user.instituteName}</h6>
   
  </div>
 
</div>
<div className="my-3 experience">
  <h4 className="p-3 rounded text-light bg-secondary"><i className="fa-brands fa-black-tie"></i> Experience</h4>
  <div className="m-3 row">
    <h6 className="col-md-9"> {user.experience}</h6>
   
  </div>
 
</div>

    
</div>

          </>
      )}
    </>
  )
}

export default GetLawyer