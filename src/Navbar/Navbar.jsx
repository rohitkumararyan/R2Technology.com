import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import Logo from "./Logo/logo1.png.png"
const Navbar = () => {
  return (
  <>
  <div className="container-flued nav_bg">
    <div className='row'>
      <div className='col-10 mx-auto'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img className='logo' src= {Logo} alt="" />
    <NavLink exact activeClassName="menu_active" className="navbar-brand" to="/">R2 TECH</NavLink >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink >
        </li>
        <li className="nav-item">
          <NavLink exact  activeClassName="menu_active"  className="nav-link" to="/service">Service</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  exact  activeClassName="menu_active"  className="nav-link" to="/contact">Contact</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  exact activeClassName="menu_active"  className="nav-link" to="/about">Abouts Us</NavLink >
        </li>
      </ul>
  
    </div>
  </div>
</nav>
</div>
    </div>
  </div>
  </>
  )
}
export default Navbar