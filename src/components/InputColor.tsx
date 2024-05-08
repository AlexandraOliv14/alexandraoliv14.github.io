import React from 'react'

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    value: any;
    label: string;
    name: string;
}

export const InputColor = ({ onChange, value, name, label }: Props) => {
    return (
        <div className='button-color'>
            <div className="label">{label}</div>
            <div className="color-input-wrapper">
                <input type="color" onChange={onChange} value={value} name={name}/>
            </div>
        </div>
    )
}
