import React, { useContext, useEffect, useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiArrowUp, FiArrowDown } from "react-icons/fi";

import { ButtonIcon, Separacion, FadeInText } from '../components'
import { ThemeContext } from '../context/themeContext';
import { theme, size } from '../theme';
import Typewriter from "typewriter-effect";
import {useInViewPort, useResponsiveWidth} from '../hooks';

export const About = () => {
    
    const width = useResponsiveWidth();

    const { toggleState, currentState } = useContext(ThemeContext);
    const [down, setDown] = useState(true);
    const [count, setCount] = useState(0)

    const targetRef = useRef<HTMLDivElement>(null);
    const {inViewport} = useInViewPort(targetRef, { threshold: 0.5 });

    const aboutEduRef = useRef<HTMLDivElement>(null);
    const {observed:inViewportEdu,inViewport: inViewPortEduNow } = useInViewPort(aboutEduRef, { threshold: 0.5 });

    const findRef = useRef<HTMLDivElement>(null);
    const {inViewport:inViewportFind} = useInViewPort(findRef, { threshold: 0.5 });

    const aboutRef = useRef<HTMLDivElement>(null);
    const {inViewport: inViewAbout} = useInViewPort(aboutRef, { threshold: 0.5 });

    const footerRef = useRef<HTMLDivElement>(null);
    const {inViewport: inViewFooter} = useInViewPort(footerRef, { threshold: 0.5 });

    useEffect(() => {
        if(inViewPortEduNow){
            setCount(c=>c+1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inViewPortEduNow])
    

    useEffect(() => {
        toggleState('ligthwarm')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (inViewport || inViewAbout) {
            setDown(true)
        }
        if (inViewportEdu || inViewFooter) {
            setDown(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inViewport, inViewportFind])

    return (
        <div className='about'>
            <div className='about-me' ref={aboutRef}>
                <ButtonIcon href={down ? '#about-findme' : '#about'} color={theme[currentState].primary} fixed={true}>
                    {
                        down ?
                            <FiArrowDown style={{ fontSize: size['small'], color: 'black' }} /> :
                            <FiArrowUp style={{ fontSize: size['small'], color: 'black' }} />
                    }
                </ButtonIcon>
                <div className='img'>
                    <img src='./imgs/aleyPatana.jpg' width={width>=600?417:150} height={width>=600?417:150} alt='aleypatana' />
                </div>
                <div className='p'>
                    <Typewriter
                        options={{ delay: 30 }}
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
                <p ref={targetRef} className={(count>1 || width<600)?'visible' : (inViewport ? 'animacion' : 'hidden') }>
                    Me gradué de la
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
                    <img src='./imgs/DALL_E_diploma.png' width={width>=600?417:150} height={width>=600?417:150} alt='dallydiploma' style={{ background: theme[currentState].primary }} />
                </div>
            </div>
            <Separacion />
            <div className='about-actual'>
                <div className='img'>
                    <img src='./imgs/DALL_E_crecimiento.png' width={width>=600?417:150} height={width>=600?417:150} alt='dallycrecimiento' style={{ background: theme[currentState].primary }} />
                </div>
                <div className='container-text' ref={aboutEduRef}>
                    {inViewportEdu ? <FadeInText text="Me apasiona profundamente  trabajar en proyectos      innovadores y me     encuentro constantemente   en búsqueda de nuevas       oportunidades y     aprendizajes en el mundo del desarrollo." />
                        : <FadeInText text='   ' />}
                </div>
                <div className='container-text_min'>
                    <p>Me apasiona profundamente trabajar en proyectos innovadores y me encuentro constantemente en búsqueda de nuevas oportunidades y aprendizajes en el mundo del desarrollo.</p>
                </div>
            </div>
            <Separacion />
            <div className='about-findme' ref={findRef} id='about-findme'>
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
                <div className='links' id='link' ref={footerRef}>
                    <ButtonIcon href='https://www.linkedin.com/in/alexandraos14/' color={theme[currentState].primary}>
                        <FiLinkedin style={{ fontSize:width>=600? size['large']: size['small'] , color: 'black' }} />
                    </ButtonIcon>
                    <ButtonIcon href='https://github.com/AlexandraOliv14' color={theme[currentState].primary}>
                        <FiGithub style={{ fontSize: width>=600? size['large']: size['small'] , color: 'black' }} />
                    </ButtonIcon>
                </div>
            </div>
        </div>
    )
}