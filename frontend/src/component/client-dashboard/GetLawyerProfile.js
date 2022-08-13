import React from "react";
import { useEffect } from "react";
import "./GetLawyerProfile.css";
import ClientNav from "./ClientNav";
import { getUserProfile } from "../../Actions/User";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button, Typography, Dialog } from "@mui/material";
import { useState } from "react";
import { giveFeedBack } from "../../Actions/User";
import Footer from '../Footer/Footer'


const GetLawyerProfile = () => {
  
  const [feedbackValue, setfeedbackValue] = useState("");
  const [feedbackToggle, setfeedbackToggle] = useState(false);
  const { error,message} = useSelector((state) => state.allUsers);

  const alert = useAlert();
    const dispatch = useDispatch();
  const params = useParams();

  const feedbackHandler = async (e) => {
    e.preventDefault();
    await dispatch(giveFeedBack(params.id, feedbackValue));
  };

  useEffect(() => {
    dispatch(getUserProfile(params.id));
  }, [dispatch, params.id]);
  const {
    user,
    // loading: userLoading,
  } = useSelector((state) => state.userProfile);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }


    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, alert, message]);
  return (
    <>
    <ClientNav/>
    {user && (
        <>
          <div className="container">
    
    <div className="my-2 card">
  <img src={user.avatar.url} alt="Lawyer Avatar" />
  <h1>{user.name}</h1>
  <p className="title">{user.email}</p>
  <p>{user.phone}</p>
  <p><button onClick={() => setfeedbackToggle(!feedbackToggle)}>Give Feedback</button></p>
 
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






<Dialog
        open={feedbackToggle}
        onClose={() => setfeedbackToggle(!feedbackToggle)} 
        
      >
        <div className="DialogBox">
          <Typography variant="h4">Feedback</Typography>

          <form className="commentForm" onSubmit={feedbackHandler}>
            <textarea
              type="text"
              value={feedbackValue}
              onChange={(e) => setfeedbackValue(e.target.value)}
              placeholder="Details Here..."
              required
              rows={8}
             
            />

            <Button  onClick={() => setfeedbackToggle(!feedbackToggle)} type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </div>
      </Dialog>

     
</div>
<Footer/>
          </>
      )}
    
    
    </>
  )
}

export default GetLawyerProfile