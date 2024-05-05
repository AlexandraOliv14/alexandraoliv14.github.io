import React from 'react'

interface Props{
    url?:string;
    href:string;
    children?: JSX.Element[] | JSX.Element;
    color?:string;
}
export const ButtonIcon = ({url,href, color,children}:Props) => {
  return (
    <div className='button_icon' style={{background:color}}>
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    </div>
  )
}
