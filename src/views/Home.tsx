import React from 'react'
import { FiLinkedin, FiGithub  } from "react-icons/fi";

export const Home = () => {

    return (
        <div className='containerHome'>
            <div className='containerInfo'>
                <h1>Hola! mi nombre es Alexandra Olivares <br/>
                </h1>
                <p>
                programadora full stack exprimentada en react js, native y algo de java.<br/><br/>
                Apasionada por proyectos innovadores, siempre en busca de nuevos proyectos o algo nuevo que aprender.
                </p>
                <br/>
            </div>
            <div className='links'>
                <a href='https://www.linkedin.com/in/alexandra-olivares-solis-3950081b5' target="_blank" rel="noopener noreferrer">
                    <FiLinkedin style={{fontSize:40, margin:'5px'}}/>
                </a>
                <a href='https://github.com/AlexandraOliv14' target="_blank" rel="noopener noreferrer">
                    <FiGithub style={{fontSize:40, margin:'5px'}}/>
                </a>
            </div>
            
        </div>
    )
}