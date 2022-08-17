import "./Cases.css";
import { Button, Typography, Dialog } from "@mui/material";
import React from "react";
// import { useAlert } from "react-alert";
// import  { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editCase, deleteCase } from "../../Actions/Case";

import { getMyCases, loadUser } from "../../Actions/User";
// import User from "../User/User";
import BidsCard from "./BidsCard";

const Cases = ({
  caseId,
  title,
  city,
  date,
  description,
  comments = [],
  // userImage,
  // userName,
  // userId,
}) => {
  const [commentToggle, setCommentToggle] = useState(false);
  const [caseToggle, setCaseToggle] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [cityValue, setCityValue] = useState(city);
  const [descriptionValue, setDescriptionValue] = useState(description);

  const dispatch = useDispatch();
  // const alert = useAlert();
  // const { error,message } = useSelector((state) => state.case);
  // dispatch(getMyCases());

  const editCaseHandler = (e) => {
    e.preventDefault();
    dispatch(editCase(caseId, titleValue, cityValue, descriptionValue));
    dispatch(getMyCases());
  };
  const deleteCaseHandler = async () => {
    const isSure = window.confirm("Are you sure to delete this case");
    if(isSure){
    await dispatch(deleteCase(caseId));
    dispatch(getMyCases());
    dispatch(loadUser());
    }
  };

  return (
    <>
      <div className="container ">
        <div className="case w-75 m-2 bg-light bg-gradient  row border border-secondary rounded">
          <h6>
            <b>Title : </b>
            {titleValue}
          </h6>
          <h6>
            <b>Location : </b>
            {cityValue}
          </h6>
          <h6>
            <b>Posted on : </b>
            {date}
          </h6>
          <h6>
            <b>Case Description : </b>
            {descriptionValue}
          </h6>

          <button
            onClick={() => setCaseToggle(!caseToggle)}
            className="col-md-4 mx-2 mb-2 w-25 btn btn-warning"
          >
            Edit
          </button>
          <button
            onClick={deleteCaseHandler}
            className="col-md-4 w-25 mb-2 btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => setCommentToggle(!commentToggle)}
            className="col-md-4 mx-2 w-25 mb-2 btn btn-success"
          >
            Available Bids
          </button>
        </div>
       
        <Dialog open={caseToggle}
         onClose={() => setCaseToggle(!caseToggle)}
         >
          <div className="DialogBox">
            <Typography variant="h4">Edit Case Details</Typography>

            <form className="commentForm" onSubmit={editCaseHandler}>
              <input
                type="text"
                onChange={(e) => setTitleValue(e.target.value)}
                value={titleValue}
                placeholder="Title Here..."
              />
              <input
                type="text"
                onChange={(e) => setCityValue(e.target.value)}
                value={cityValue}
                placeholder="City..."
              />
              <input
                type="text"
                onChange={(e) => setDescriptionValue(e.target.value)}
                value={descriptionValue}
                placeholder="Description..."
              />

              <Button
                onClick={() => setCaseToggle(!caseToggle)}
                type="submit"
                variant="contained"
              >
                Update
              </Button>
            </form>
          </div>
        </Dialog>

        <Dialog
          open={commentToggle}
          onClose={() => setCommentToggle(!commentToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4">Available Bids</Typography>

            {comments.length > 0 ? (
              comments.map((item) => (
                <BidsCard
                  userId={item.user._id}
                  name={item.user.name}
                  avatar={item.user.avatar.url}
                  comment={item.comment}
                  commentId={item._id}
                  key={item._id}
                />
              ))
            ) : (
              <Typography>No Bids Yet</Typography>
            )}
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default Cases;
