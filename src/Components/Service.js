import React from 'react'
import Data from './Data';
import Card from './Card';

const Service = () => {
  return (
    <>
    <div className='my-5 bg-warning-subtle'>
      <h1 className='text-center'> OUR SERVICE</h1>
    </div>
    <div className='container-fluid mb-5'>
      <div className='row'>

      <div className='col-10 mx-auto'>
        <div className='row gy-4'>
          
           {
             Data.map((val, ind)=>{
               return <Card key={ind}
               imgsrc = {val.imgSrc}
               title = {val.Tiltle}
               pragraf ={val.p}/>
               
             })
           }

          </div>
        </div>
      </div>
      </div>
  
    </>
  )
}

export default Service;