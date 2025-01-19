import { render, screen } from "@testing-library/react"
import { About } from "../../views/About";

describe('Pruebas en <About/>', () => {
    
    test('Debe coincidir con Snapshot',()=>{
        const {container} = render(<About/>);
        expect(container).toMatchSnapshot();
    })

    test('Debe contener foto con Patana',()=>{
        render(<About/>);
        const img = screen.getByAltText('aleypatana')
        expect(img).toBeTruthy();
    })

    test('Debe contener foto educacion',()=>{
        render(<About/>);
        const img = screen.getByAltText('dallydiploma')
        expect(img).toBeTruthy();
    })

    test('Debe contener foto actualmente',()=>{
        render(<About/>);
        const img = screen.getByAltText('dallycrecimiento')
        expect(img).toBeTruthy();
    })


})
