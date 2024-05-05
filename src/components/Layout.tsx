import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button } from './Button';
import { ThemeContext } from '../context/themeContext';
import { theme } from '../theme';
// FiPackage ->proyecto

export const Layout = () => {

    const navigate = useNavigate();

    const {currentState} = useContext(ThemeContext);

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
                    <Button text='Home' onClick={() => handlerClick('/')} color={theme[currentState].primary}/>
                    <Button text='About' onClick={() => handlerClick('/about')} color={theme[currentState].primary}/>
                    <Button text='Portafolio' onClick={() => handlerClick('/portafolio')} color={theme[currentState].primary}/>
                </div>
            </nav>
            <Outlet />
        </>
    )
}