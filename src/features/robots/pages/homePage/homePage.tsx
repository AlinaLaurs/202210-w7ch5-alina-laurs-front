import { Provider } from 'react-redux';
import { appStore } from '../../../../infrastructure/store/store';
import { RobotsList } from '../../components/robots/robotsList/robotsList';
import { useRobots } from '../../hooks/hookRobots/useRobots';

function HomePage() {
    return (
        <main>
            <h2>Robots</h2>
        </main>
    );
}

export default HomePage;
