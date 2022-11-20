import { Robot } from '../models/robot';
import { createAction } from '@reduxjs/toolkit';
import { actionTypesRobots } from './actionTypesRobots';

export const loadActionCreator = createAction<Robot[]>(actionTypesRobots.load);

export const addActionCreator = createAction<Robot>(actionTypesRobots.add);

export const updateActionCreator = createAction<Robot>(
    actionTypesRobots.update
);

export const deleteActionCreator = createAction<Robot['id']>(
    actionTypesRobots.delete
);
