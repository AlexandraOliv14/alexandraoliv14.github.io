import React from 'react'

interface Prop {
    text: string;
    color?: string;
    onClick: ()=>void;
}

export const Button = ({ text = '', color, onClick }: Prop) => {
    return (
        <button className='button_nav' onClick={onClick} style={{ background: color }}>{text}</button>
    )
}
