import React from "react";
import "./LawyerNav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Actions/User";

const LawyerNav = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    // alert.success("Logged out successfully");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <Link className="navbar-brand mx-2" to="/myaccount">
          <i className="fa-solid fa-scale-balanced"></i> EasyWakeel
        </Link>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/myaccount">
                <i className="bi bi-person"></i> My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profilesettings">
                {" "}
                <i className="bi bi-gear"></i> Profile Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewallcases">
                <i className="bi bi-briefcase"></i> View All Cases
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mycases">
                <i className="bi bi-briefcase"></i> My Cases
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <h6>Welcome {user.name}</h6>
            <input onClick={logoutHandler} type="button" value="Logout" />
          </span>
        </div>
      </nav>
    </>
  );
};

export default LawyerNav;
