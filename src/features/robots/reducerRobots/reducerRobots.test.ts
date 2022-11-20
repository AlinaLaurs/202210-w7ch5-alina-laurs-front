import { Robot } from '../models/robot';
import { RobotsReducer } from './reducerRobots';
import { actionTypesRobots } from './actionTypesRobots';

describe('Given the function RobotsReducer', () => {
    const robotMock: Robot = {
        id: '1',
        image: 'url',
        name: 'Pepe',
        speed: 9,
        strength: 6,
        creationDate: '20.11.2022',
    };

    let action: { type: string; payload: unknown };
    let state: Array<Robot>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypesRobots.load,
                payload: [robotMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = RobotsReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypesRobots.add,
                payload: robotMock,
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = RobotsReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypesRobots.update,
                payload: { ...robotMock, name: 'Update robot' },
            };
            state = [robotMock];
        });
        test('Then the returned state should include the action payload', () => {
            const result = RobotsReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypesRobots.update,
                payload: { ...robotMock, id: '1', name: 'Miguel' },
            };
            state = [robotMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = RobotsReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypesRobots.delete,
                payload: robotMock,
            };
            state = [robotMock];
        });
        test('Then the returned state should not include the action payload', () => {
            const result = RobotsReducer(state, action);
            expect(result).toEqual([robotMock]);
        });
    });

    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypesRobots.delete,
                payload: { ...robotMock, id: '1' },
            };
            state = [robotMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = RobotsReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [robotMock];
        });
        test('Then the returned state should be ...', () => {
            const result = RobotsReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
