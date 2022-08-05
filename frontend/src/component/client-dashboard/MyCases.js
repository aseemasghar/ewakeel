import React from "react";
import ClientNav from "./ClientNav";
import Cases from "./Cases";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getMyCases } from "../../Actions/User";
// import Loader from "../Loader/Loader";
// import User from "../User/User";


const MyCases = () => {
  const dispatch = useDispatch();
  // const alert = useAlert();
  const { user ,loading:userLoading} = useSelector((state) => state.user);
  const {loading, cases } = useSelector((state) => state.myCases);


  useEffect(() => {
    dispatch(getMyCases());
  }, [dispatch]);

  return (
    <>
      <ClientNav/>
      <h4 className="mt-4 p-4 container rounded text-light bg-secondary">
          <i className="bi bi-briefcase"></i> MY CASES
        </h4>
      {cases && cases.length > 0 ? (
          cases.map((Case) => (
            <Cases
              key={Case._id}
              caseId={Case._id}
              title={Case.title}
              city={Case.city}
              date={Case.date}
              description={Case.description}
              comments={Case.comments}
              // userImage={Case.user.avatar.url}
              // userName={Case.user.name}
              // userId={Case.user._id}
            
            />
          ))
        ) : (
          <h2 className='text-center' variant="h6">You have not post any Case</h2>
        )}
    </>
  );
};

export default MyCases;
