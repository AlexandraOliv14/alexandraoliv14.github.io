import React from 'react'

export const About = () => {
    const onButtonClick = () => {
        const pdfUrl = "/documentCurriculum.pdf";
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'Currículum Alexandra Olivares.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='about'>
            <div className='aboutImg'>
                <div className='imgcontainer'>
                    <div className='marco1'>
                        <img alt='' src='./imgs/aleyPatana.jpg' width={250} height={250} />
                    </div>
                </div>
                <div className='info'>
                    <p>Soy una persona responsable y proactiva,<br />
                        amante de los animales y la naturaleza.<br />
                    </p>
                    <br />
                    <p>con la capacidad de trabajar bajo presión y <br />
                    una alta habilidad para resolver problemas.</p>
                    <br />
                    <p>Mi objetivo profesional es seguir aprendiendo y<br /> 
                    creciendo en el campo de la ingeniería de software. <br /></p>
                    <br />
                    <p>Me encanta desarrollar aplicaciones innovadoras </p>
                </div>
            </div>
            <div className='button'>
                <button onClick={onButtonClick}>
                    Descarga mi curriculum aqui!!
                </button>
            </div>
        </div>
    )
}
