import { Provider } from 'react-redux';
import { appStore } from '../../../../infrastructure/store/store';
import { RobotsList } from '../../components/robots/robotsList/robotsList';
import { useRobots } from '../../hooks/hookRobots/useRobots';

function HomePage() {
    return (
        <main>
            <p>Robots</p>
        </main>
    );
}

export default HomePage;
