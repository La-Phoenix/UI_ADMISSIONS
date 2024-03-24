import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate, 
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
} from "react-router-dom"
import Auth from "./Pages/Auth/auth";
import Home from "./Pages/Home/Home";
import "./App.css"
import { Fragment, useEffect, useState } from "react";
import PrivateRoutes from "./Utils/PrivateRoute";
import Root from "./Pages/Root/Root";
import Clearance from "./Pages/Clearance/Clearance";
import OlevelVerify from "./Pages/OlevelVerify/OlevelVerify";

export const APIBASEURL = "http://localhost:5000/api"

function App() {
  const profile = JSON.parse(localStorage.getItem('Profile'))
  const [user, SetUser] = useState(profile)
  

  useEffect(() => {
    SetUser(profile)
  }, [user])
  

  return (
  <Router>
    <Fragment>
      <Routes> 
          <Route exact path="/" element={<PrivateRoutes user={user} />} >
        <Route element={<Root />}>
            <Route exact path="/"  element={<Home />}/>
            <Route exact path="/home"  element={<Home />}/>
            <Route exact path="/clearance"  element={<Clearance />}/>
            <Route exact path="/verifyOlevels"  element={<OlevelVerify />}/>
            <Route exact path="*"  element={<Home />}/>
          </Route>
        </Route>
        <Route exact path="/auth"  element={<Auth/>} />
      </Routes>
    </Fragment>
  </Router>
  )
}

export default App
