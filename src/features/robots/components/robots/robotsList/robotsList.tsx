import { JacketsType } from '../../../models/robot';
import { JacketItem } from '../robotItem/robotItem';

export function JacketList({ item }: { item: JacketsType[] }) {
    return (
        <>
            <ul>
                {item.map((item: JacketsType) => (
                    <li key={item.id}>
                        <JacketItem item={item}></JacketItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
