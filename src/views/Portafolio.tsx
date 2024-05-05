import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/themeContext';
import { theme } from '../theme';
import { Button } from '../components/Button';
import { useForm } from '../hooks/useForm';
import { ButtonIcon } from '../components/ButtonIcon';
import { FiGithub } from 'react-icons/fi';

export const Portafolio = () => {

    const { toggleState, currentState } = useContext(ThemeContext);//currentState

    useEffect(() => {
        toggleState('warm')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { state, onChange, setState } = useForm({ select: 'warm', text: 'Home', color: theme[currentState].primary, color1: theme[currentState].primary });
    const { select, text, color, color1 } = state;

    useEffect(() => {
        toggleState(select);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [select]);

    useEffect(() => {
        setState({...state, color:theme[currentState].primary, color1:theme[currentState].primary})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentState])
    

    return (
        <div className='portafolio'>
            <div className='pagina1'>
                <div className='card' style={{ background: theme[currentState].secondary }}>
                    <h2>Componentes de este proyecto</h2>
                    <div className='container-select'>
                        <select onChange={onChange} value={select} name='select'>
                            <option value='warm'>warm</option>
                            <option value='ligthwarm'>ligthwarm</option>
                            <option value='cool'>cool</option>
                        </select>
                    </div>
                    <div className='buton1'>
                        <Button text={text} color={color}/>
                        <input onChange={onChange} value={text} name='text' />
                        <div className="color-input-wrapper">
                            <input type="color" onChange={onChange} value ={color} name='color'/>
                        </div>
                    </div>
                    <div className='buton1'>
                        <ButtonIcon color={color1}>
                            <FiGithub style={{ fontSize: 60, margin: '5px', color: 'black' }} />
                        </ButtonIcon>
                        <div className="color-input-wrapper">
                            <input type="color" onChange={onChange} value ={color1} name='color1'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
