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
          <Route exact path="/"  element={<Home />}/>
          <Route exact path="/home"  element={<Home />}/>
          <Route exact path="*"  element={<Home />}/>
        </Route>
        <Route exact path="/auth"  element={<Auth/>} />
      </Routes>
    </Fragment>
  </Router>
  )
}

export default App
