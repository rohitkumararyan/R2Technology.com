import React from 'react'
import Review from '../Review/Review';
import Image from "../Image/s20.png";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const About = () => {
  return (
    <>
   <section id="header" className='head'>
      <div className='container-fluid nav_bg'>
        <div className="row">
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-lg-0  order-2 order-lg-1 d flex justify-content-center flex-column'>
               <h1> About us Co-Fouder & Fouder <strog className="brand-name"> Er.Rohit kumar</strog></h1>
               <h4 className='text'> With My creativity And Talended Team</h4>
               <h2 className='my-3'>
               To leverage my expertise in software development, video editing, and digital marketing to contribute effectively to a dynamic team. Seeking a challenging project where me & my team can utilize own creativity, technical skills, and strategic thinking to drive impactful results and enhance user experiences
               </h2>
               <div className='mt-3'>
                <NavLink to ="/service" className='btn-get-satarted'>Get Started</NavLink>
               </div>
            </div>
               <div className='col-lg-6 order-1 order-lg-2 header-image'>
              <img src={Image} className='img-fluid animated'></img>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="Container-fluid mt-2">
      <Review></Review>
 
    </div> 
    </>
  )
}

export default About