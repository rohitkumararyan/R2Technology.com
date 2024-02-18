import React, { useState } from 'react'
import "./contact.css"
import Review from '../Review/Review';

import emailIcon from "../Navbar/Logo/email.png"
import passwordIcon from "../Navbar/Logo/password1.png"
import userIcon from "../Navbar/Logo/user3.png"
const Contact = () => {

  const [action, setAction] = useState('Sign Up');

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name: name, email: email, password: password ,number:number,message:message};
    setAllEntry([...allEntry, newEntry]);

  }


  return (
    <>
      <div className='my-5'>
      <h1 className='txt'>Welcome to Contact Us</h1>

      <div className='container contact_div'>
         <div className='text4'>
        <p>WriteIt Solutions is a dynamic software company specializing in creating innovative writing and editing tools 
          for professionals, students, and individuals. Our mission is to empower users to express themselves effectively and efficiently through technology.</p>
          </div>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
              <form onSubmit={submitForm}>
                 <div class="mb-3">
                 
                    <label for="exampleFormControlInput1"
                    >Type Detail</label>
                    <div className='form-label'>
                    <img src={userIcon} className='icon' alt=''></img>
                    <input type="text" name="name" placeholder='Name' value={name}
                    onChange={(e) => setName(e.target.value)}></input>
                  </div>
                <div className='form-label'>
                  <img src={emailIcon} className='icon' alt=''></img>
                  <input type="email" placeholder='Email ID' value={email}
                  onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='form-label'>
                  <img src={passwordIcon} className='icon' alt=''></img>
                  <input type="password" placeholder='Password' value={password}
                  onChange={(e) => setPassword(e.target.value)}></input>
                </div>
        
                <div className='form-label'>
                  <img src={userIcon} className='icon' alt=''></img>
                  <input type="number" placeholder='Mobile Number' value={number}
                  onChange={(e) => setNumber(e.target.value)}></input>
                </div>
                </div>
               <div class="mb-3">
               <label for="exampleFormControlTextarea1" className="text">Message here</label>
              <textarea className="form-control " id="exampleFormControlTextarea1" rows="3"
               value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <div className='submit_container'>
                <button className={action === "sumbit" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Submit</button>
                </div>
</div>
              </form>
          </div>
        </div>
        </div>
        <div className='Container-fluid'>
             <Review></Review>
        </div>


       <div className='container-f'>
         <div className='txt'>
          <h1>Login Here</h1>

         </div>

         <form onSubmit={submitForm} className="Container">
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action === "Login" ? <div></div> : <div className='input'>
            <img src={userIcon} className='icon' alt=''></img>
            <input type="text" name="name" placeholder='Name' value={name}
              onChange={(e) => setName(e.target.value)}></input>
          </div>}

          <div className='input'>
            <img src={emailIcon} className='icon' alt=''></img>
            <input type="email" placeholder='Email ID' value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='input'>
            <img src={passwordIcon} className='icon' alt=''></img>
            <input type="password" placeholder='Password' value={password}
              onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className='input'>
            <img src={userIcon} className='icon' alt=''></img>
            <input type="number" placeholder='Mobile Number' value={number}
              onChange={(e) => setNumber(e.target.value)}></input>
          </div>
        </div>
        {action === "Sign Up" ? <div></div> :
          <div className='forgget-password'>Forget Password <span>Click here</span></div>}

        <div className='submit_container'>
          <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Sign Up</button>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Login</div>
        </div>
      </form>
       </div>
   

      <div className='data'>
        {

          <ul>
            {allEntry.map((item) => (
              <li>Name:-{item.key} {item.name}, Email:-{item.email},  password:-{item.password} number:-{item.number} message:-{item.message}</li>

            ))}
          </ul>
        }
      </div>
      </div>
      
    </>
  )
}

export default Contact;