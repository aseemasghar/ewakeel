import React from 'react'
import AdminNav from './AdminNav'
import { useEffect } from 'react';
import { getAllLawyers } from '../../Actions/User';
import LawyerList from './LawyerList';
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

const Lawyers = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLawyers());
  }, [dispatch]);

  const { lawyers } = useSelector(
    (state) => state.allUsers
  );

  const { error, message } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }


    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, alert, message]);
  return (
    <>
    <AdminNav/>
    <div className="d-flex flex-row my-4 p-3 container rounded text-light bg-secondary">
<h4 className='flex-grow-1'>
          <i className="bi bi-person"></i> All Lawyers
        </h4>
        <h4>
          {/* Total Clients: {clients.length} */}
        </h4>
</div>

<div>
        {lawyers && lawyers.length > 0 ? (
          lawyers.map((lawyer) => (
            <LawyerList
              key={lawyer._id}
              userId={lawyer._id}
              name={lawyer.name}
              email={lawyer.email}
              city={lawyer.city}
              avatar={lawyer.avatar.url}
              // feedbacks={client.feedbacks}
            
              
            />
          ))
        ) : (
          <h1 className='text-center'>No Lawyers Yet</h1>
        )}
      </div>
    </>
  )
}

export default Lawyers