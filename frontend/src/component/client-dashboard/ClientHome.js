import React from 'react'
import { useEffect } from 'react';
import './ClientHome.css'
import ClientNav from './ClientNav';
import User from '../GetUser/User'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Actions/User";
import Footer from '../Footer/Footer';


const ClientHome = () => {
    const dispatch = useDispatch();

    const { users } = useSelector(
        (state) => state.allUsers
      );

      useEffect(() => {
        dispatch(getAllUsers());
      }, [dispatch]);




  return (
    <>
    <ClientNav/>
    <div className="client-home container">
    <h4 className="my-3 text-center">
    AFFORDABLE LAWYERS, LAW FIRMS AND TAX CONSULTANTS IN PAKISTAN
        </h4>
        <p className="text-center">
          (Get connected with lawyers allover in Pakistan, easily. Ask any legal question.)
        </p>

        <div>
        {users && users.length > 0 ? (
          users.map((user) => (
            <User
              key={user._id}
              userId={user._id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              avatar={user.avatar.url}
              feedbacks={user.feedbacks}
            
              
            />
          ))
        ) : (
          <h1>No Lawyers Yet</h1>
        )}
      </div>



  
     



     
    </div>
    
    
    <Footer/>
    </>
    
  )
}

export default ClientHome