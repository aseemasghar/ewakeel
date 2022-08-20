import React from "react";
import { useEffect } from "react";
import "./GetClientProfile.css";
import LawyerNav from "./LawyerNav";
import { getUserProfile } from "../../Actions/User";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from '../Footer/Footer'

const GetClientProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getUserProfile(params.id));
  }, [dispatch, params.id]);
  const {
    user,
    // loading: userLoading,
    // error: userError,
  } = useSelector((state) => state.userProfile);

  return (
    <>
      <LawyerNav />
      {user && (
        <>
          <div className="container">
            <div className="my-2 card">
              <img src={user.avatar.url} alt="User" />
              <h1>{user.name}</h1>
              <p className="title">{user.email}</p>
              <p className="bg-success rounded "><a className="text-white" href={`https://wa.me/${user.phone}`}><i class="fa-brands fa-whatsapp"></i></a></p>
              
            </div>

            <div className="my-3 contact">
              <h4 className="p-4 rounded text-light bg-secondary">
                <i className="fa-solid fa-address-book"></i> Contact Details
              </h4>
              <div className="m-3 row">
                <h5 className="col">
                  <i className="fa-solid fa-envelope"></i> {user.email}
                </h5>
                <h5 className="col">
                  <i className="fa-solid fa-phone"></i> {user.phone}
                </h5>
              </div>
            </div>

            <div className="adress">
              <h4 className="p-4 rounded text-light bg-secondary">
                <i className="fa-solid fa-address-card"></i> Address
              </h4>
              <div className="row m-3">
                <h5 className="col">
                  <i className="fa-solid fa-location-dot"></i> Address :{" "}
                  {user.address}
                </h5>
                <h5 className="col">
                  <i className="fa-solid fa-location-dot"></i> City :{" "}
                  {user.city}
                </h5>
              </div>
              <div className="row m-3">
                <h5 className="col">
                  <i className="fa-solid fa-location-dot"></i> State :{" "}
                  {user.province}
                </h5>
                <h5 className="col">
                  <i className="fa-solid fa-location-dot"></i> Country :{" "}
                  {user.country}
                </h5>
              </div>
            </div>
          </div>
          <Footer/>
        </>
      )}
    </>
  );
};

export default GetClientProfile;
