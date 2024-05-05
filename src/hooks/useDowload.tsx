import React from 'react'

interface Prop {
    url: string;
    name: string;
}
export const useDowload = ({ url, name }: Prop) => {
    const onDowload = () => {
        const pdfUrl = url;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return { onDowload }
}
