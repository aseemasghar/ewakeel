import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
    <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 className="our-team">Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src={require('../images/about1.jpg')} alt="aseem"/>
      <div className="container">
        <h2>Aseem Asghar</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>aseemasghar@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={require('../images/about2.jpg')} alt="uamr"/>
      <div className="container">
        <h2>Umar Raza</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>umar@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={require('../images/about3.jpg')} alt="John" />
      <div className="container">
        <h2>Ahmad Raza</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>ahmad@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default About;