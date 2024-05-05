import React from 'react'
import { Separacion } from '../components/Separacion'
import { ButtonIcon } from '../components/ButtonIcon'
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const About = () => {


    return (
        <div className='about'>
            <div className='about-me'>
                <div className='img'>
                    <img src='./imgs/aleyPatana.jpg' width={417} height={420} alt='aleypatana' />
                </div>
                <p>¡Hola! Soy Alexandra Olivares<br />
                    Solís, ingeniera informática<br />
                    especializada en desarrollo<br />
                    de software full-stack, con <br />
                    un enfoque en React.js, React<br />
                    Native, y Java.
                </p>
            </div>
            <Separacion />
            <div className='about-educacion'>
                <p>
                    Me gradué de la<br />
                    Universidad Tecnológica<br />
                    Metropolitana y <br />
                    actualmente estoy <br />
                    expandiendo mis <br />
                    conocimientos a través <br />
                    de un máster en <br />
                    Ingeniería Informática <br />
                    en la Universidad <br />
                    Politécnica de Cataluña.
                </p>
                <div className='img'>
                    <img src='./imgs/DALL_E_diploma.png' width={500} alt='dallydiploma' />
                </div>
            </div>
            <Separacion />
            <div className='about-actual'>
                <div className='img'>
                    <img src='./imgs/DALL_E_crecimiento.png' width={500} alt='dallydiploma' />
                </div>
                <p>
                    Estoy profundamente <br />
                    apasionada por los <br />
                    proyectos innovadores y <br />
                    me encuentro <br />
                    constantemente en <br />
                    búsqueda de nuevas <br />
                    oportunidades y <br />
                    aprendizajes en el mundo <br />
                    del desarrollo.
                </p>
            </div>
            <Separacion />
            <div className='about-findme'>
                <h1>🔎 Puedes encontrarme en</h1>
                <div className='links'>
                    <ButtonIcon href='https://www.linkedin.com/in/alexandraos14/'>
                        <FiGithub style={{fontSize:60, margin:'5px', color:'black'}}/>
                    </ButtonIcon>
                    <ButtonIcon href='https://github.com/AlexandraOliv14'>
                        <FiLinkedin style={{fontSize:60, margin:'5px', color:'black'}}/>
                    </ButtonIcon>
                </div>
            </div>
        </div>
    )
}