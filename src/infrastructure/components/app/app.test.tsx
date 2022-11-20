import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { appStore } from '../../store/store';
import { App } from './app';

describe('Given App component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <App />
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Alina/i);
            expect(element).toBeInTheDocument();
        });
    });
});
