import { createContext, useContext, useEffect, useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Clearance from "../Pages/Clearance/Clearance";
import OlevelVerify from "../Pages/OlevelVerify/OlevelVerify";
import ChangeCourse from "../Pages/ChangeCourse/ChangeCourse";
import Transfer from "../Pages/Transfer/Transfer";
import Auth from "../Pages/Auth/auth";
import Root from "../Pages/Root/Root";
import { APIBASEURL } from "../App";
import axios from "axios";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

const RedirectHome = () => <Navigate to ="/" />
const RedirectAuth = () => <Navigate to ="/auth" />

const pages = [
    {path: "/", element: <Home />, isPrivate: false },
    {path: "/clearance", element: <Clearance />, isPrivate: false },
    {path: "/verifyOlevels", element: <OlevelVerify />, isPrivate: false },
    {path: "/changeOfCourse", element: <ChangeCourse />, isPrivate: false },
    {path: "/transfer", element: <Transfer />, isPrivate: false },
    {path: "*", element: <RedirectHome />, isPrivate: false }
]

export const AuthWrapper = () => {
    const profile = JSON.parse(localStorage.getItem('Profile'));
    const [ user, setUser ] = useState({
        name: "",
        isAuthenticated: true
    })

    useEffect(() => {
        if(!profile){
            console.log(profile)
            setUser({
                ...profile,
                isAuthenticated: false
            })
        }
    }, [])

    const login = async (formData) => {
        const resp = await axios.post(`${APIBASEURL}/user/signin`, formData)
        localStorage.setItem("Profile", JSON.stringify(resp.data));
        setUser({
            ...resp.data,
            isAuthenticated: true
        })
    }

    const logout = (f) => {
        localStorage.removeItem("Profile")
        setUser({
            isAuthenticated: false
        })
    }


    return (
        <AuthContext.Provider value={{user, login, logout}}>
            <>
                <Routes>
                    {!user.isAuthenticated ? (
                        <>
                            <Route path="/auth" element={<Auth />} />
                            <Route path="*" element={<RedirectAuth />} />
                        </>
                         ): (
                            <Route element={<Root />}>
                                {
                                    pages.map((page, ind) => {
                                        if (!page.isPrivate) {
                                            return <Route key={ind} path={page.path} element={page.element} />
                                        }
                                    })
                                }
                            </Route>
                         )}
                </Routes>
            </>
        </AuthContext.Provider>
    )
}