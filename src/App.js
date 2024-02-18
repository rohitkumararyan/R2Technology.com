import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Navbar from './Navbar/Navbar';
import Footer from './Components/Footer';



function App() {
  return (<> 
        
      <Router>
        <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact  path="/service" component={Service} />
        <Route exact  path="/contact" component={Contact} />
      </Switch>
      <Footer></Footer>
    </Router>
       
  </>);
}

export default App;
