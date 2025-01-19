import { render } from "@testing-library/react"
import { Separacion } from "../../components";

describe('Pruebas en <Separacion/>', () => {
    
    test('Separacion debe hacer match con snapshot',()=>{
            const {container} = render(<Separacion/>);
            expect(container).toMatchSnapshot();
        })
})