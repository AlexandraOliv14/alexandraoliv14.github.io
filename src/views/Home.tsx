import React from 'react'

export const Home = () => {
    return (
        <div className='containerHome'>
            <div className='containerFoto'>
                <img src='./imgs/aleAnimada.png' alt='aleAnimada' width={389}/>
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