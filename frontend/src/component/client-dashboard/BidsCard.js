import React from 'react'
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./BidsCard.css";
// import { useDispatch, useSelector } from "react-redux";

const BidsCard = ({
    userId,
    avatar,
    name,
    comment,

}) => {
    // const { user } = useSelector((state) => state.user);
    // const dispatch = useDispatch();
  return (
    <>
    <div className="commentUser">
    <Link to={`/lawyer/${userId}`}>
      <img src={avatar} alt={name} />
      <Typography style={{ minWidth: "6vmax" }}>{name}</Typography>
    </Link>
    </div>
    <Typography className='bidValue'>{comment}</Typography>
    
  
  </>
  )
}

export default BidsCard