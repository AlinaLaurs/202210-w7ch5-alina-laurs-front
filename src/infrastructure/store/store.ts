import { RobotsReducer } from './../../features/robots/reducerRobots/reducerRobots';
import { configureStore } from '@reduxjs/toolkit';

export const appStore = configureStore({
    reducer: {
        robots: RobotsReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
