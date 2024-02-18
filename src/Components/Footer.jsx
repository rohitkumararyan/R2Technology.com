
import React from 'react'

import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { FaFacebook, FaInstagram,FaLinkedin,FaGithub,FaYoutube } from 'react-icons/fa'
import "./footer.css"
const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
    
        <div className="footer-logo">
            <div className='text'>LINK</div>
            
            <NavLink  exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink >
            <NavLink  exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/service">Service</NavLink >
            <NavLink  exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/contact">Contact</NavLink >
            <NavLink  exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/about">About us</NavLink >
        </div>
        <div className="footer-text">
             <div className='h-text'>
                <h1 className='text'>Abouts Us</h1>
                <h4>Brief Information</h4>
                 <h6>established by on 18 feb 2022</h6>
                 
                 <snap>
                   We are the team of talented Developer making websites Mobile App, 
                   <p>Video Editing 
                 ,IQ Code Design & Digital Marketing</p>
                 </snap>
                 
             </div>
        </div>
        <div className="social-media">
        <div className='text'>Social Media</div>
            <a  href="https://www.facebook.com/rohitkumar.aryan.357"><FaFacebook></FaFacebook></a>
            <a  href="https://www.instagram.com/rohitkumar.aryan.357/?hl=en"><FaInstagram></FaInstagram></a>
            <a  href="https://www.linkedin.com/in/rohit-kumar-abb351170/"><FaLinkedin></FaLinkedin></a>
            <a  href="https://github.com/rohitkumararyan"> <FaGithub></FaGithub></a>
            <a  href="https://www.youtube.com/channel/UCxjKR_8g24Goews6wmtzsRQ"><FaYoutube></FaYoutube></a>


        </div>
        <div className="footer-text">
             <div className='h-text'>
                <h1 className='text'>Founder(CEO)</h1>
                <h4>Er. Rohit kumar</h4>
                 <h6>B.TECH(ME) From MIMIT Malout</h6>
                 
                 <snap>
                
                        <p>rkaryan25998@gmail.com</p>
                        <p>Saket  frant Max Hospital South Delhi </p>
                        <p>+9179090-28502 , +9184049-21368</p>
                
                 </snap>
                 
             </div>
        </div>

    </div>
</footer>
  )
}

export default Footer