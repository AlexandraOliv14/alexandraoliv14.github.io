import React from 'react'

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    value: any;
    label: string;
    name: string;
    opcions: (string | number)[];
}

export const Select = ({ onChange, value, name,label, opcions }: Props) => {
    return (
        <div className="name_ii_Active">
            <div className="label">{label}</div>
            <select onChange={onChange} value={value} name={name} className="innerframe">
                {
                    opcions.map((value, index) => (
                        <option key={index} value={value}>{value}</option>
                    ))
                }
            </select>
        </div>
    )
}
