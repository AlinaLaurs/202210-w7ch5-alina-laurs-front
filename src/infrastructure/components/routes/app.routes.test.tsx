import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

describe('Given AppRoutes component', () => {
    describe('When we render the component and the route is home', () => {
        beforeEach(() => {
            render(
                <Router initialEntries={['/', '/home']} initialIndex={0}>
                    <AppRoutes />
                </Router>
            );
        });
        test('Then it should display the SalesPage', () => {
            const element = screen.getByText(/Sales/i);
            expect(element).toBeInTheDocument();
        });
    });
});
