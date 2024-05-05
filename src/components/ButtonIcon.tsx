import React from 'react'

interface Props{
    url?:string;
    href:string;
    children?: JSX.Element[] | JSX.Element;
}
export const ButtonIcon = ({url,href,children}:Props) => {
  return (
    <div className='button_icon' >
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    </div>
  )
}
