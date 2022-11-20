import { Robot } from '../../../models/robot';

export function RobotItem({ item }: { item: Robot }) {
    return (
        <>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} width="200px" />
            <p>{item.speed}</p>
            <p>{item.strength}</p>
            <p>{item.creationDate}€</p>
        </>
    );
}
