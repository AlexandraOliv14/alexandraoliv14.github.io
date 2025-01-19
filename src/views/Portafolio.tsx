import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/themeContext';
import { size, sizeType, theme } from '../theme';
import { Button, ButtonIcon, Select, Input, InputColor } from '../components';
import { useForm } from '../hooks';
import { FiGithub } from 'react-icons/fi';

export const Portafolio = () => {

    const { toggleState, currentState } = useContext(ThemeContext);//currentState

    useEffect(() => {
        toggleState('warm')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { state, onChange, setState } = useForm({ select: 'warm', text: 'Home', color: theme[currentState].primary, color1: theme[currentState].primary, sizeButton: 'medium' as sizeType});
    const { select, text, color, color1, sizeButton} = state;

    useEffect(() => {
        toggleState(select);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [select]);

    useEffect(() => {
        setState({ ...state, color: theme[currentState].primary, color1: theme[currentState].primary })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentState])


    return (
        <div className='portafolio'>
            <div className='pagina1'>
                <div className='card' style={{ background: theme[currentState].secondary }}>
                    <div className='card-flex'>
                        <h2>Componentes de este proyecto</h2>
                        <div className='theme'>
                            <h3>Manejo de tema</h3>
                            <div className='select-theme'>
                                <Select label='Selecciona el tema' name='select' onChange={onChange} value={select} opcions={['warm', 'ligthwarm', 'cool']} />
                            </div>
                        </div>
                        <div className='theme-button'>
                            <h3>Manejo de botones</h3>
                            <div className='button'>
                                <div className='button-item'>
                                    <Button text={text} color={color} />
                                </div>
                                <div className='button-item'>
                                    <Input label='Escriba el nombre del botón: ' name='text' onChange={onChange} value={text} />
                                </div>
                                <div className='button-item'>
                                    <InputColor label='Seleccione el color del botón:' name='color' onChange={onChange} value={color} />
                                </div>
                            </div>
                            <div className="button2">
                                <div className='button-item'>
                                    <ButtonIcon color={color1}>
                                        <FiGithub style={{ fontSize: size[sizeButton as sizeType], color: 'black' }} />
                                    </ButtonIcon>
                                </div>
                                <div className='button-item'>
                                <Select label='Selecciona el tamaño: ' name='sizeButton' onChange={onChange} value={sizeButton} opcions={['small', 'medium', 'large']} />
                                </div>
                                <div className='button-item'>
                                    <InputColor label='Seleccione el color del botón:' name='color1' onChange={onChange} value={color1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
