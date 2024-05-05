import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button } from './Button';
// FiPackage ->proyecto

export const Layout = () => {

    const navigate = useNavigate();

    const handlerClick = (link: string) => {
        navigate(link);
    }
    return (
        <>
            <nav className='nav'>
                <div className='titulo'>
                    <h1>Alexandra Olivares Solís</h1>
                </div>
                <div className='navegacion'>
                    <Button text='Home' onClick={() => handlerClick('/')} />
                    <Button text='About' onClick={() => handlerClick('/about')} />
                    <Button text='Prototipo' onClick={() => handlerClick('/about')} />
                </div>
            </nav>
            <Outlet />
        </>
    )
}