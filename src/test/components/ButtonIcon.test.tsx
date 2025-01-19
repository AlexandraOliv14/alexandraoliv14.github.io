import { render, screen } from "@testing-library/react"
import { ButtonIcon } from "../../components"

describe('Pruebas en <ButtonIcon/>', () => {
    
    test('Buton Icon con valores default',()=>{
            render(<ButtonIcon><>Click Me</></ButtonIcon>);
            const linkElement = screen.getByText('Click Me');
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.closest('a')).toHaveAttribute('target', '_blank');
            expect(linkElement.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
        })
    
    test('Fixed se realixa de manera correcta',()=>{
        render(<ButtonIcon fixed><>Click Me</></ButtonIcon>);
        const container = screen.getByText('Click Me').closest('div');
        expect(container).toHaveClass('button_icon_fixed');
    })

    test('Sin fix por default',()=>{
        render(<ButtonIcon ><>Click Me</></ButtonIcon>);
        const container = screen.getByText('Click Me').closest('div');
        expect(container).toHaveClass('button_icon');
    })

    test('Background correspondiente al ingresado "red"',()=>{
        render(<ButtonIcon color="red"><>Click Me</></ButtonIcon>);
        const container = screen.getByText('Click Me').closest('div');
        expect(container).toHaveStyle({ background: 'red' });
    })

    test('Href corresponde al ingresado',()=>{
        render(<ButtonIcon href="https://example.com"><>Click Me</></ButtonIcon>);
        const linkElement = screen.getByText('Click Me').closest('a');
        expect(linkElement).toHaveAttribute('href', 'https://example.com');
    })

    test('Elemento children en el button',()=>{
        render(
            <ButtonIcon>
                <span>Child Element</span>
            </ButtonIcon>
        );
        const childElement = screen.getByText('Child Element');
        expect(childElement).toBeInTheDocument();
    })
})