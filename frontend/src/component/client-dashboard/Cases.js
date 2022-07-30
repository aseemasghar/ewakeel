import './Cases.css'
import { Button, Typography, Dialog } from "@mui/material";
import React from 'react'
import  { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCase,deleteCase } from "../../Actions/Case";
// import {
//   addCommentOnPost,
//   deletePost,
//   likePost,
//   updatePost,
// } from "../../Actions/Post";
import { getMyCases, loadUser } from "../../Actions/User";
// import User from "../User/User";
// import CommentCard from "../CommentCard/CommentCard";


const Cases = ({
  caseId,
  title,
  city,
  date,
  description,
  // comments = [],
  // userImage,
  // userName,
  // userId,
  // isDelete = false,
  // isAccount = false,
}) => {

  // const [commentValue, setCommentValue] = useState("");
  // const [commentToggle, setCommentToggle] = useState(false);
  const [caseToggle, setCaseToggle] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [cityValue, setCityValue] = useState(city);
  const [dateValue, setDateValue] = useState(date);
  const [descriptionValue, setDescriptionValue] = useState(description);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // dispatch(getMyCases());

  const editCaseHandler = (e) => {
    e.preventDefault();
     dispatch(editCase(caseId,titleValue,cityValue,descriptionValue));
    dispatch(getMyCases());
  };
  const deleteCaseHandler = async () => {
    await dispatch(deleteCase(caseId));
    dispatch(getMyCases());
    dispatch(loadUser());
  };
 
  return (
    <>
    <div className="container ">
      
        <div className="case w-75 m-2  row border border-secondary rounded">
          <h6>
            <b>Title : </b>{titleValue}
          </h6>
          <h6>
            <b>Location : </b>{cityValue}
          </h6>
          <h6>
            <b>Posted on : </b>{dateValue}
          </h6>
          <h6>
            <b>Case Description : </b>{descriptionValue}
          </h6>
         
          <button onClick={() => setCaseToggle(!caseToggle)}   className="col-md-4 mx-2 mb-2 w-25 btn btn-warning">
            Edit
          </button>
          <button onClick={deleteCaseHandler} className="col-md-4 w-25 mb-2 btn btn-danger">
            Delete
          </button>
        </div>
        <Dialog
        open={caseToggle}
        // onClose={() => setCaseToggle(!caseToggle)}
      >
        <div className="DialogBox">
          <Typography variant="h4">Edit Case Details</Typography>

          <form className="commentForm" onSubmit={editCaseHandler}>
            <input
              type="text"
              onChange={(e) => setTitleValue(e.target.value)}
              // value={titleValue}
              placeholder="Title Here..."
              required
            />
            <input
              type="text"
              onChange={(e) => setCityValue(e.target.value)}
              // value={cityValue}
              placeholder="City..."
              required
            />
            <input
              type="text"
              onChange={(e) => setDescriptionValue(e.target.value)}
              // value={descriptionValue}
              placeholder="Description..."
              required
            />

            <Button onClick={() => setCaseToggle(!caseToggle)}  type="submit" variant="contained">
              Update
            </Button>
          </form>
        </div>
      </Dialog>

      </div>
    </>
  )
}

export default Cases