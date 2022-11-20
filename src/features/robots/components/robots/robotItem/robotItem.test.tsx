import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../../../infrastructure/store/store';
import { useRobots } from '../../../hooks/hookRobots/useRobots';
import { Robot } from '../../../models/robot';
import { RobotItem } from './robotItem';

jest.mock('../../../hooks/hookRobots/useRobots');

describe('Given RobotItem component', () => {
    describe('When we render the component', () => {
        test('Then it should display', async () => {
            const robotMock: Robot = {
                id: '4',
                image: 'url',
                name: 'ISDI',
                speed: 10,
                strength: 3,
                creationDate: '3.10.2022',
            };
            (useRobots as jest.Mock).mockReturnValue({
                products: [robotMock],
            });
            render(
                <Provider store={appStore}>
                    <RobotItem item={robotMock} />
                </Provider>
            );
            const element = await screen.findByText(/ISDI/i);
            expect(element).toBeInTheDocument();
        });
    });
});
