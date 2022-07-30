import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return (
    <>
    <div className="bg w-100 h-100">
      <div className="container">
    <nav className="topnav  navbar navbar-expand-lg bg-dark ">
<div className="container-fluid">
<Link className="navbar-brand" to="/"><i className="fa-solid fa-scale-balanced"></i> EWakeel</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Signup</Link>
      </li>

    </ul>
  </div>
</div>
</nav>
</div>
</div>
  
  </>
  )
}
export default Home;