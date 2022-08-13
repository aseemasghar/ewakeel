import React from 'react'
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
  <Link className="navbar-brand mx-2" to="/"><i className="fa-solid fa-scale-balanced"></i> EasyWakeel</Link>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item">
        <Link className="nav-link" to="/admin/cases"><i className="bi bi-briefcase"></i> All Cases</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/users"><i className="bi bi-person"></i> All Users</Link>
      </li>
     

    </ul>
    <span className="navbar-text">
      <h6>Welcome Admin</h6>
      <Link type="button" value="Logout" to="/admin">Logout</Link>
    </span>
   
  </div>
</nav>
    
    
    </>
  )
}

export default AdminNav