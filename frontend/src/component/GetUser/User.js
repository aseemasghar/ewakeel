import React from 'react'
import './User.css'
import { Link } from "react-router-dom";
import ReviewCard from "../client-dashboard/ReviewCard";
import { Button, Typography, Dialog } from "@mui/material";
import { useState } from "react";


const User = ({
    userId,
    name,
    avatar,
    email,
    phone,
    feedbacks=[],
}) => {

    const [commentToggle, setCommentToggle] = useState(false);
 

  return (
    <>
           <div className="box">
        <div className="user-image">
            <img src={avatar}
            alt="Lawyer Avatar"/>
        </div>
 
        <div className="content">
            <h3 className="name">{name}</h3>
            <p className="username">{email}</p>
 
 
            <p className="details">
                {phone}
            </p>
 
 
            <Link className="effect effect-4" to={`/lawyer/${userId}`}>
                View Profile
            </Link>
            <Button  onClick={() => setCommentToggle(!commentToggle)}>
                Feedbacks
            </Button>
        </div>

        <Dialog
          open={commentToggle}
          onClose={() => setCommentToggle(!commentToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4">Feedbacks</Typography>

            {feedbacks.length > 0 ? (
              feedbacks.map((item) => (
                <ReviewCard
                  name={item.user.name}
                  avatar={item.user.avatar.url}
                  feedback={item.feedback}
                  feedbackId={item._id}
                  key={item._id}
                />
              ))
            ) : (
              <Typography>No Reviews Yet</Typography>
            )}
          </div>
        </Dialog>
    </div>
    </>
  )
}

export default User
