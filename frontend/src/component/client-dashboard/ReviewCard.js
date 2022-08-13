import React from 'react'
import { Typography } from "@mui/material";
import "./ReviewCard.css";
// import { useDispatch, useSelector } from "react-redux";

const ReviewCard = ({
    avatar,
    name,
    feedback,

}) => {
    // const { user } = useSelector((state) => state.user);
    // const dispatch = useDispatch();
  return (
    <>
    <div className="commentUser">
   
      <img src={avatar} alt={name} />
      <Typography style={{ minWidth: "6vmax" }}>{name}</Typography>

    </div>
    <Typography className='bidValue'>{feedback}</Typography>
    
  
  </>
  )
}

export default ReviewCard