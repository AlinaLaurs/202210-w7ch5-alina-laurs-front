import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RobotsList } from './robotsList';
import { Robot } from '../../../models/robot';

describe('Given the RobotsList component', () => {
    describe('When we render the component', () => {
        test('then it should display the Robots list', () => {
            const robotMock: Robot[] = [
                {
                    id: '3',
                    image: 'url',
                    name: 'Rafa',
                    speed: 8,
                    strength: 7,
                    creationDate: '19.11.2022',
                },
            ];
            render(
                <>
                    <RobotsList item={robotMock}></RobotsList>
                </>
            );
            const element = screen.getByText(/Rafa/i);
            expect(element).toBeInTheDocument();
        });
    });
});
