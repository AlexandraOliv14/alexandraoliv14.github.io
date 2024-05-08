import React from 'react'

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    value: any;
    label: string;
    name: string;
}
export const Input = ({ onChange, value, name, label }: Props) => {
    return (
        <div className="name_ii_Active">
            <div className="label">{label}</div>
            <input onChange={onChange} value={value} name={name} className="innerframe" />
        </div>
    )
}
