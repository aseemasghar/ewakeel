import React from "react";
import ClientNav from "./ClientNav";
import Cases from "./Cases";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getMyCases } from "../../Actions/User";
import { useAlert } from "react-alert";
import Footer from '../Footer/Footer'
// import Loader from "../Loader/Loader";
// import User from "../User/User";


const MyCases = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  // const { user ,loading:userLoading} = useSelector((state) => state.user);
  const { cases } = useSelector((state) => state.myCases);
  const { error,message } = useSelector((state) => state.case);


  useEffect(() => {
    dispatch(getMyCases());
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
        <Footer/>
    </>
  );
};

export default MyCases;
