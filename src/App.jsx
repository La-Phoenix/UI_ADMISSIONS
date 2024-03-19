import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate, 
  Route,
  RouterProvider,
} from "react-router-dom"
import Container from '@mui/material/Container';
import Auth from "./Pages/Auth/auth";
import Home from "./Pages/Home/Home";

function App() {
  
  const Redirect = () => {
    return <Navigate to ="Home" />
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<Redirect />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
