import {
  BrowserRouter
} from "react-router-dom"
import "./App.css"
import { AuthWrapper } from "./Utils/AuthWrapper";

export const APIBASEURL = "http://localhost:5000/api"

function App() {  
  return (
    <BrowserRouter>
      <AuthWrapper />
    </BrowserRouter>
  )
}

export default App
