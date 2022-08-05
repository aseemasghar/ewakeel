import React from 'react'
import './AllCases.css'
import { Avatar,Button, Typography, Dialog } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentOnCase,getAllCases } from "../../Actions/Case";
import { Link } from "react-router-dom";
import User from '../GetUser/User'



const AllCases = ({
    caseId,
    title,
    city,
    date,
    description,
  userImage,
  userName,
  userId,}) => {

      const [commentValue, setCommentValue] = useState("");
      const [commentToggle, setCommentToggle] = useState(false);

      const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    await dispatch(addCommentOnCase(caseId, commentValue));
      dispatch(getAllCases());
    
  };




        // const { Case } = useSelector((state) => state.allCases);
        // const dispatch = useDispatch();
        // dispatch(getAllCases());


  return (
 

    <>
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

        <Link to={`/user/${userId}`}>
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
     <button onClick={() => setCommentToggle(!commentToggle)} className="col-md-4 mx-2 mb-2 w-25 btn btn-success">
      Bid on Case
    </button>
   
  </div>
  <Dialog
        open={commentToggle}
        onClose={() => setCommentToggle(!commentToggle)} 
        
      >
        <div className="DialogBox">
          <Typography variant="h4">Bid Details</Typography>

          <form className="commentForm" onSubmit={addCommentHandler}>
            <textarea
              type="text"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              placeholder="Details Here..."
              required
              rows={8}
             
            />

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </div>
      </Dialog>
  </div>
  </>
  )
}

export default AllCases