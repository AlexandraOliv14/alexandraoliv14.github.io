import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/themeContext';

export const Portafolio = () => {

    const { toggleState } = useContext(ThemeContext);//currentState

    useEffect(() => {
        toggleState('warm')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className='portafolio'>
        <div className='pagina1'>
            <div className='card'>
                
            </div>
        </div>
    </div>
  )
}
