import { RobotsList } from '../../components/robots/robotsList/robotsList';
import { useRobots } from '../../hooks/hookRobots/useRobots';

function HomePage() {
    const { robots } = useRobots();
    return (
        <main>
            <RobotsList item={robots} />
        </main>
    );
}

export default HomePage;
