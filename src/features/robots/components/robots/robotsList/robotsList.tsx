import { Robot } from '../../../models/robot';
import { RobotItem } from '../robotItem/robotItem';

export function RobotsList({ item }: { item: Robot[] }) {
    return (
        <>
            <ul>
                {item.map((item: Robot) => (
                    <li key={item.id}>
                        <RobotItem item={item}></RobotItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
