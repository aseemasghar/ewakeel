import React from 'react'
import AdminNav from './AdminNav'
import { useEffect } from 'react';
import { getAllClients } from '../../Actions/User';
import ClientList from './ClientList';
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

const Clients = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClients());
  }, [dispatch]);

  const { clients } = useSelector(
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
          <i className="bi bi-person"></i> All Clients
        </h4>
        <h4>
          {/* Total Clients: {clients.length} */}
        </h4>
</div>

<div>
        {clients && clients.length > 0 ? (
          clients.map((client) => (
            <ClientList
              key={client._id}
              userId={client._id}
              name={client.name}
              email={client.email}
              city={client.city}
              avatar={client.avatar.url}
              // feedbacks={client.feedbacks}
            
              
            />
          ))
        ) : (
          <h1 className='text-center'>No Clients Yet</h1>
        )}
      </div>

    
    
    </>
  )
}

export default Clients