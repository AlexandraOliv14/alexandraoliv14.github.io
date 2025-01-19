import { render, screen } from "@testing-library/react"
import { Input } from "../../components";

describe('Pruebas en <Input/>', () => {

    test('Label se muestra en el input', () => {
        render(<Input label="label" name="name" onChange={() => { }} value={'value'} />);
        const labelElement = screen.getByText('label');
        expect(labelElement).toBeInTheDocument();
    })

    test('Contiene los atributos de name y value', () => {
        render(<Input label="label" name="name" onChange={() => { }} value={'value'} />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveAttribute('name', 'name');
        expect(inputElement).toHaveValue('value');
    })

    test('Handler Change de manera correcta', () => {
        render(<Input onChange={() => { }} value="" name="name" label="label" />);
        const containerElement = screen.getByText('label').parentElement;
        expect(containerElement).toHaveClass('name_ii_Active');

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveClass('innerframe');
    })

})