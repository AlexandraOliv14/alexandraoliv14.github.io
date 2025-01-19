import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../../components/Button";


describe('Pruebas en <Button/>', () => {
    const text = 'Test'

    const onClick = () => {
        return 'Funcionando'
    }

    test('Texto de Button corresponde',()=>{
            render(<Button text={text} />);
            const elemnt = screen.getByText(text);
            expect(elemnt).toBeInTheDocument();
        })

    test('onClick debe llamarse',()=>{
        const click = jest.fn(onClick);

        render(<Button text={text} onClick={click} />);
        const buttonElement = screen.getByText(text);

        fireEvent.click(buttonElement);
        expect(click).toHaveBeenCalled();
    })
    
    test('onClick debe coincidir con el ingresado',()=>{

        const click = jest.fn(onClick);

        render(<Button text={text} onClick={click} />);
        const buttonElement = screen.getByText(text);

        fireEvent.click(buttonElement);
        expect(click).toHaveBeenCalled();

        const returnValue = click.mock.results[0].value;
        expect(returnValue).toBe('Funcionando');
    })

    
})