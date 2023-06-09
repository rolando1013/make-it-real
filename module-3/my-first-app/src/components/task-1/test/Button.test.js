import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../Button";

test('render the Button', () => {
    render(<Button/>);
    const button = screen.getByRole('button');
    expect (button).toBeInTheDocument();
})

test('render the correct text prop', () => { 
    const text = 'Boton +';
    render(<Button text={text}/>);

    const button = screen.getByText( text );
    expect(button).toBeInTheDocument();
});

it('render the correct onClick Function', () => {
    const fn = jest.fn();
    render(<Button onClick={fn} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
});