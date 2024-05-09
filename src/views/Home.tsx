import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/themeContext';

export const Home = () => {

    const {toggleState} = useContext(ThemeContext);

    useEffect(() => {
        toggleState('cool')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='containerHome'>
            <div className='containerFoto'>
                <img src='./imgs/aleAnimada.png' alt='aleAnimada' width={300}/>
            </div>
            <div className='containerInfo'>
                <div className='saludo'>
                    <h1>Hola 👋<br/>Soy Alexandra Olivares</h1>
                </div>
                <p>
                        Una programadora full-stack <br/> 
                    con amplia experiencia en<br/> 
                    React.js, React Native y Java.
                </p>
            </div>
        </div>
    )
}