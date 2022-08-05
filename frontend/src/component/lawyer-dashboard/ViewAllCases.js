import React from 'react'
import LawyerNav from './LawyerNav.js'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCases } from "../../Actions/Case";
import AllCases from './AllCases';

const ViewAllCases = () => {
  const dispatch = useDispatch();

  // const { user ,loading:userLoading} = useSelector((state) => state.user);
  const {loading, cases } = useSelector((state) => state.allCases);


  useEffect(() => {
    dispatch(getAllCases());
  }, [dispatch]);
  return (
    <>
    <LawyerNav/>
    
    <h4 className="mt-4 p-4 container rounded text-light bg-secondary">
          <i className="bi bi-briefcase"></i> Recent Cases
        </h4>
        {cases && cases.length > 0 ? (
          cases.map((Case) => (
            <AllCases
              key={Case._id}
              caseId={Case._id}
              title={Case.title}
              city={Case.city}
              date={Case.date}
              description={Case.description}
              comments={Case.comments}
              userImage={Case.user.avatar.url}
              userName={Case.user.name}
              userId={Case.user._id}
              // isAccount={true}
              // isDelete={true}
            />
          ))
        ) : (
          <h2 className='text-center' variant="h6">No Cases Available</h2>
        )}
    
    </>
  )
}

export default ViewAllCases