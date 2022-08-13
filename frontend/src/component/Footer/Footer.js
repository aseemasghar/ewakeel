import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
     <footer>
        <div className="footer-content">
            <h3>EasyWakeel</h3>
            <p>EasyWakeel.com for the individual who is looking to solve any kind of legal case, this product will help them get the services through the web application. The client can easily find a legal lawyer for his problem.</p>
            <ul className="socials">
                <li><a href="www.facebook.com"><i className="fa fa-facebook"></i></a></li>
                <li><a href="www.twitter.com"><i className="fa fa-twitter"></i></a></li>
                <li><a href="www.gmail.com"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="www.youtube.com"><i className="fa fa-youtube"></i></a></li>
                <li><a href="www.linkedin.com"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy;2022 <a href="localhost:3000">EasyWakeel</a>  </p>
                   
        </div>

    </footer>
    
    
    </>
  )
}

export default Footer