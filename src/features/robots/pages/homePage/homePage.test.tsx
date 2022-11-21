import { render, screen } from '@testing-library/react';
import HomePage from './homePage';

describe('Given HomePage component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(<HomePage />);
        });
        test('Then it should display "Speed"', () => {
            const element = screen.getByText(/Speed/i);
            expect(element).toBeInTheDocument();
        });
    });
});
