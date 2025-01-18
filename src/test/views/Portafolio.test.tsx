import { render, screen } from "@testing-library/react"
import { Portafolio } from "../../views/Portafolio";

describe('Pruebas en <Portafolio/>', () => {
    test('Bienvenida',()=>{
        render(<Portafolio/>);
        const elemnt = screen.getByText(/Componentes de este proyecto/i);
        expect(elemnt).toBeInTheDocument();
    })

    test('Debe coincidir con Snapshot',()=>{
        const {container} = render(<Portafolio/>);
        expect(container).toMatchSnapshot();
    })

})
