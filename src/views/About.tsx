import React, { useContext, useEffect, useRef } from 'react'
import { FiGithub, FiLinkedin } from "react-icons/fi";

import { Separacion } from '../components/Separacion'
import { ButtonIcon } from '../components/ButtonIcon'
import { ThemeContext } from '../context/themeContext';
import { theme, size } from '../theme';
import Typewriter from "typewriter-effect";
import useInViewPort from '../hooks/useInViewPort';
import FadeInText from '../components/FadeInText';

export const About = () => {

    const { toggleState, currentState } = useContext(ThemeContext);

    const targetRef = useRef<HTMLDivElement>(null);
    const inViewport = useInViewPort(targetRef, { threshold: 0.5 });

    const aboutEduRef = useRef<HTMLDivElement>(null);
    const inViewportEdu = useInViewPort(aboutEduRef, { threshold: 0.5 });

    const findRef = useRef<HTMLDivElement>(null);
    const inViewportFind = useInViewPort(findRef, { threshold: 0.5 });

    useEffect(() => {
        toggleState('ligthwarm')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='about'>
            <div className='about-me'>
                <div className='img'>
                    <img src='./imgs/aleyPatana.jpg' width={417} height={420} alt='aleypatana' />
                </div>
                <div className='p'>
                    <Typewriter
                        options={{delay:30}}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('¡Hola! Soy Alexandra Olivares<br /> Solís, Ingeniera informática<br />especializada en desarrollo<br />de software full-stack, con <br />un enfoque en React.js, React<br />Native, y Java.')
                                .start();
                        }}
                    />
                </div>
            </div>
            <Separacion />
            <div className='about-educacion'>
                <p ref={targetRef} className={inViewport ? 'animacion' : 'hidden'}>
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
                    <img src='./imgs/DALL_E_diploma.png' width={500} alt='dallydiploma' style={{ background: theme[currentState].primary }} />
                </div>
            </div>
            <Separacion />
            <div className='about-actual'>
                <div className='img'>
                    <img src='./imgs/DALL_E_crecimiento.png' width={500} alt='dallydiploma' style={{ background: theme[currentState].primary }} />
                </div>
                <p ref={aboutEduRef}>
                    {inViewportEdu && <FadeInText text="  Me apasiona profundamente       trabajar en proyectos      innovadores y me encuentro    constantemente en búsqueda de     nuevas oportunidades y    aprendizajes en el mundo del desarrollo." />}                  
                </p>
            </div>
            <Separacion />
            <div className='about-findme' ref={findRef}>
                {inViewportFind && <h1>🔎
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(' Puedes encontrarme en')
                                .pauseFor(1000)
                                .start();
                        }}
                    />
                </h1>}
                <div className='links'>
                    <ButtonIcon href='https://www.linkedin.com/in/alexandraos14/' color={theme[currentState].primary}>
                        <FiLinkedin style={{ fontSize: size['large'] , margin: '5px', color: 'black' }} />
                    </ButtonIcon>
                    <ButtonIcon href='https://github.com/AlexandraOliv14' color={theme[currentState].primary}>
                        <FiGithub style={{ fontSize: size['large'] , margin: '5px', color: 'black' }} />
                    </ButtonIcon>
                </div>
            </div>
        </div>
    )
}