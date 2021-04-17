
import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Appointment from "./components/Appointments/Appointments/Appointment";
import Home from "./components/Home/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import PrivateRoute from "./components/LogIn/PrivateRoute/PrivateRoute";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddDoctors from "./components/AddDoctors/AddDoctors/AddDoctors";

export const loggedInContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <loggedInContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h5>{loggedInUser.email}</h5>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/addDoctor'>
            <AddDoctors></AddDoctors>
          </PrivateRoute>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/blog">
            {/* <Users /> */}
          </Route>

        </Switch>
      </Router>

    </loggedInContext.Provider>

  );
}

export default App;
