 import React from 'react'
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Redirect, Route } from 'react-router-dom';
 import Home from "./Home"
 import Service from "./Service"
 import About from "./About"
 import contact from "./Contact"
 import Navbar from "./Navbar"
 import { Switch } from "react-router-dom"

 const App =() => {
   return (
     <>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/service" component={Service}/>
       <Route exact path="/contact" component={contact} />
       <Redirect to="/"/>
     </Switch>
       
     </>
   );
 };

 export default App;