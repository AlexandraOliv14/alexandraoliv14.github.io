import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../context/themeContext';
import { theme } from '../theme';
import { Button } from '../components/Button';
// FiPackage ->proyecto

export const Layout = () => {

    const navigate = useNavigate();

    const { currentState } = useContext(ThemeContext);

    const handlerClick = (link: string) => {
        navigate(link);
    }
    return (
        <>
            <nav className='nav' id='about'>
                <div className='titulo'>
                    <h1>Alexandra Olivares Solís</h1>
                </div>
                <div className='navegacion'>
                    <div className='div_button'>
                        <Button text='Home' onClick={() => handlerClick('/')} color={theme[currentState].primary} />
                    </div>
                    <div className='div_button'>
                        <Button text='About' onClick={() => handlerClick('/about')} color={theme[currentState].primary} />
                    </div>
                    <div className='div_button'>
                        <Button text='Portafolio' onClick={() => handlerClick('/portafolio')} color={theme[currentState].primary} />
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}