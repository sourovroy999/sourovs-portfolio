import { createBrowserRouter, Navigate } from "react-router"
import Home from "../pages/Home"
import MainLayout from "../layouts/MainLayout"
import About from "../pages/About"
import SideBar from "../sidebar/SideBar"
import Projects from "../pages/Projects"
import Blogs from "../pages/Blogs"

export const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/about',
                element:<About/>,
               
            },
            {
                path:'/projects',
                element:<Projects/>,
               
            },
            {
                path:'/blogs',
                element:<Blogs/>,
               
            },
            {
                path:'/resume',
                element:<p>
                    resumeeee
                </p>

            }
        
        ]
    }
])