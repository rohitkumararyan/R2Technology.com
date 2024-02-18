
import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import Data from './Data'
const Card = (props) => {
  return (
    <>

 <div className='col-md-4 col-10 mx-auto'>
 <div className="card">
  <img src={props.imgsrc} className="card-img-top" alt="props.imgsrc"/>
  <div className="card-body">
    <h3 className="card-title font-weight-bold aline-item-centre ">{props.title}</h3>
    <p className="card-text">{props.pragraf}</p>
    <NavLink to="/contact" class="btn btn-primary">More info</NavLink>
  </div>
</div>
</div>
        




    </>
  )
}

export default Card