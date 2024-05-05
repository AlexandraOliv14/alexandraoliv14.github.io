import React, { useState } from 'react'


export const useForm = (defaultValue:any) => {

    const [state, setState] = useState(defaultValue);

    const onChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return { state, onChange, setState };
}