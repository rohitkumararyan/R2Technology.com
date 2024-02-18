import React from 'react'
import Image from "../Image/s1.png";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const Home = () => {
  return (
    <>
    <section id="header" className='head'>
      <div className='container-fluid nav_bg'>
        <div className="row">
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-lg-0  order-2 order-lg-1 d flex justify-content-center flex-column'>
               <h1>Grow your Bussiness with <strog className="brand-name"> R2 Technology</strog></h1>
               <h2 className='my-3'>
                 We are the team of talented Developer making websites Mobile App, Video Editing ,IQ Code Design & Digital Marketing
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
    </>
  )
}

export default Home;