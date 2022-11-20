import { renderHook, waitFor } from '@testing-library/react';
import { useRobots } from './useRobots';
import { Robot, ProtoRobot } from './../../models/robot';
import { Provider } from 'react-redux';
import { RobotsRepository } from '../../services/robotsServices/robotsRepository';
import { appStore } from '../../../../infrastructure/store/store';

jest.mock('../../services/robotsServices/robotsRepository');

const mockOne = {
    id: '1',
    speed: 9,
};
const mockTwo = {
    id: '1',
    name: 'string',
    image: 'string',
    speed: 7,
    strength: 8,
    creationDate: 'string',
};

describe('Given the hook', () => {
    let result: {
        current: {
            robots: Array<Robot>;
            handleAdd: (newRobot: ProtoRobot) => void;
            handleDelete: (id: string) => void;
            handleUpdate: (updateRobot: Partial<Robot>) => void;
        };
    };

    beforeEach(() => {
        RobotsRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue([mockTwo]);
        RobotsRepository.prototype.create = jest
            .fn()
            .mockResolvedValue(mockTwo);
        RobotsRepository.prototype.delete = jest
            .fn()
            .mockResolvedValue(mockTwo);
        RobotsRepository.prototype.update = jest
            .fn()
            .mockResolvedValue(mockOne);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useRobots(), { wrapper }));
    });

    test('if we use HandleAdd should add a new item to the array of robots', async () => {
        await waitFor(() => {
            result.current.handleAdd(mockTwo);
            expect(result.current.robots.at(-1)).toEqual(mockTwo);
        });
    });
    test('if we use HandleUpdate should change an item from the array of robots', async () => {
        await waitFor(() => {
            result.current.handleUpdate(mockOne);
            expect(result.current.robots).toContain(mockOne);
        });
    });
    test('if we use HandleDelete should delete an item from the array of robots', async () => {
        await waitFor(() => {
            result.current.handleDelete(mockTwo.id);
            expect(result.current.robots).toEqual([]);
        });
    });
});
