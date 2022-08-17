import React from 'react'
import AdminNav from './AdminNav'
import CasesList from './CasesList'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCases } from "../../Actions/Case";

const Cases = () => {
  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCases());
      }, [dispatch]);
      const { cases } = useSelector((state) => state.allCases);
    //  console.log(cases.length)
  return (
    <>
    <AdminNav/> 
<div className="d-flex flex-row mt-4 p-4 container rounded text-light bg-secondary">
<h4 className='flex-grow-1'>
          <i className="bi bi-briefcase"></i> All Cases
        </h4>
        <h4>
          {/* Total Cases: {cases.length} */}
        </h4>
</div>
   
     {cases && cases.length > 0 ? (
          cases.map((Case) => (
            <CasesList
              key={Case._id}
              caseId={Case._id}
              title={Case.title}
              city={Case.city}
              date={Case.date}
              description={Case.description}
              userName={Case.user.name}
              userImage={Case.user.avatar.url}
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

export default Cases