import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { FiHome, FiArchive  } from "react-icons/fi";
// FiPackage ->proyecto

export const Layout = () => {

    const navigate = useNavigate();

    const handlerClick = (link:string) =>{
        navigate(link);
    }
    return (
        <>
            <div id="stars-container">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
            <nav className='nav'>
                <h2 onClick={()=>handlerClick('/')}><FiHome style={{fontSize:30, margin:'5px'}}/> Home</h2>
                <h2 onClick={()=>handlerClick('/about')}><FiArchive style={{fontSize:30, margin:'5px'}} />About</h2>
            </nav>
            <Outlet />
        </>
    )
}