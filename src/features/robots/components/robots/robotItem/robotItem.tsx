import { Robot } from '../../../models/robot';
import { useRobots } from '../../../hooks/hookRobots/useRobots';

export function RobotItem({ item }: { item: Robot }) {
    const { handleDelete } = useRobots();
    return (
        <>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} width="200px" />
            <p>Speed: {item.speed}</p>
            <p>Strength: {item.strength}</p>
            <p>Creation date: {item.creationDate}</p>
            <button
                onClick={() => {
                    handleDelete(item.id);
                }}
            >
                Delete
            </button>
        </>
    );
}
