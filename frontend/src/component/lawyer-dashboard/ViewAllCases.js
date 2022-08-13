import React from 'react'
import LawyerNav from './LawyerNav.js'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCases } from "../../Actions/Case";
import AllCases from './AllCases';
import { useAlert } from "react-alert";
import Footer from '../Footer/Footer.js';

const ViewAllCases = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  // const { user ,loading:userLoading} = useSelector((state) => state.user);
  const { cases } = useSelector((state) => state.allCases);
  const { error,message } = useSelector((state) => state.case);


  useEffect(() => {
    dispatch(getAllCases());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error,alert, message]);

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
    
    <Footer/>
    </>
  )
}

export default ViewAllCases