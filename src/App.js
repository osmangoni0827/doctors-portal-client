
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from "./components/MainHome/Home/Home";

function App() {
  return (
   <Router> 
     <Switch>
       <Route exact path='/'>
         <Home></Home>
       </Route>
   <Route path="/about">
     {/* <About /> */}
   </Route>
   <Route path="/blog">
     {/* <Users /> */}
   </Route>
   <Route path="/home">
     <Home />
   </Route>
 </Switch>
</Router>
  );
}

export default App;
