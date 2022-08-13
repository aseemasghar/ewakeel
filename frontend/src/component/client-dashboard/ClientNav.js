import React from 'react'
import './ClientNav.css'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { logoutUser } from "../../Actions/User";

const ClientNav = () => {

  const { user,  } = useSelector((state) => state.user);
  

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    // alert.success("Logged out successfully");
  };
  return (
    <>
  <nav className="navbar navbar-expand-lg sticky-top  navbar-dark bg-dark">
  <Link className="navbar-brand mx-2" to="/my-account"><i className="fa-solid fa-scale-balanced"></i> EasyWakeel</Link>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
        <Link className="nav-link" to="/client-home"><i className="bi bi-house"></i> Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/my-account"><i className="bi bi-person"></i> My Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile-settings"> <i className="bi bi-gear"></i> Profile Settings</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/post-a-case"><i className="bi bi-briefcase"></i> Post a Case</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/my-cases"><i className="bi bi-briefcase"></i> My Cases</Link>
      </li>

    </ul>
    <span className=" navbar-text">
      <h6 className=''>Welcome {user.name}</h6>
      <input onClick={logoutHandler} className='' type="button" value="Logout" />
    </span>
   
  </div>
</nav>   
    </>
  )
}

export default ClientNav


