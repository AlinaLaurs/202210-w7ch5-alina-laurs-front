import { render, screen } from '@testing-library/react';
import HomePage from './homePage';

describe('Given SalesPage component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(<HomePage />);
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Robots/i);
            expect(element).toBeInTheDocument();
        });
    });
});
