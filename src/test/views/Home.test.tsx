import { render, screen } from "@testing-library/react"
import { Home } from "../../views/Home"

describe('Pruebas en <Home/>', () => {
    test('Bienvenida',()=>{
        render(<Home/>);
        const elemnt = screen.getByText(/Soy Alexandra Olivares/i);
        expect(elemnt).toBeInTheDocument();
    })

    test('Debe coincidir con Snapshot',()=>{
        const {container} = render(<Home/>);
        expect(container).toMatchSnapshot();
    })

    test('Debe contener foto animada',()=>{
        render(<Home/>);
        const img = screen.getByAltText('aleAnimada')
        expect(img).toBeTruthy();
    })

    test('Debe contener foto animada con url correspondiente',()=>{
        render(<Home/>);
        const img = screen.getByAltText('aleAnimada')
        expect(img).toHaveAttribute('src', './imgs/aleAnimada.png')
    })
})
