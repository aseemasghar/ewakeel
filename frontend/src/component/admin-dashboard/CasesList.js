import React from 'react'
import {Link} from 'react-router-dom';
import { Avatar,Button, Typography, Dialog } from "@mui/material";
import './CaseList.css'
const CasesList = ({
    caseId,
    title,
    city,
    date,
    description,
  userName,
  userImage,
  userId,
}) => {
  return (
    <div>
        <div className="container">
    <div className="caseUser">
    <Avatar
          src={userImage}
          alt="User"
          sx={{
            height: "3vmax",
            width: "3vmax",
          }}
        />
       <Link to=''>
          <Typography fontWeight={700}>{userName}</Typography>
          </Link>
        </div>



    <div className="case w-75 m-2 my-0 bg-light bg-gradient  row border border-secondary rounded">
    <h6>
      <b>Title : </b>{title}
    </h6>
    <h6>
      <b>Location : </b>{city}
    </h6>
    <h6>
      <b>Posted on : </b>{date}
    </h6>
    <h6>
      <b>Case Description : </b>{description}
    </h6>
    {/* onClick={() => setCaseToggle(!caseToggle)} */}
     <button  className="col-md-4 mx-2 mb-2 w-25 btn btn-danger">
      Delete
    </button>
   
  </div>
  
  </div>
    </div>
  )
}

export default CasesList