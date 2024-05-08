import React from 'react'

interface Props{
    href?:string;
    children?: JSX.Element[] | JSX.Element;
    color?:string;
    fixed?:boolean
}
export const ButtonIcon = ({href, color,children, fixed=false}:Props) => {
  return (
    <div className={fixed?'button_icon_fixed':'button_icon'} style={{background:color}}>
      {
        fixed ?
        <a href={href}>
            {children}
        </a>
        :
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
      }
    </div>
  )
}
