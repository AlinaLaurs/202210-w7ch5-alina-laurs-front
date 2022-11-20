import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Robots"', () => {
            render(<Header />);
            const element = screen.getByText(/Robots/i);
            expect(element).toBeInTheDocument();
        });
    });
});
