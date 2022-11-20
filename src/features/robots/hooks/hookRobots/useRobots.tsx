import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../../infrastructure/store/store';
import { Robot, ProtoRobot } from '../../models/robot';
import * as ac from '../../reducerRobots/actionCreatorsRobots';
import { RobotsRepository } from '../../services/robotsServices/robotsRepository';

export const useRobots = () => {
    const robots = useSelector((state: rootState) => state.robots);
    const dispatcher = useDispatch();
    const apiRobot = useMemo(() => new RobotsRepository(), []);

    useEffect(() => {
        apiRobot
            .getAll()
            .then((robots) => dispatcher(ac.loadActionCreator(robots)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiRobot, dispatcher]);

    const handleAdd = (newRobot: ProtoRobot) => {
        apiRobot
            .create(newRobot)
            .then((robot: Robot) => dispatcher(ac.addActionCreator(robot)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateRobot: Partial<Robot>) => {
        apiRobot
            .update(updateRobot)
            .then((robot: Robot) => dispatcher(ac.updateActionCreator(robot)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: string) => {
        apiRobot
            .delete(+id)
            .then(() => dispatcher(ac.deleteActionCreator(id)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        robots,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
