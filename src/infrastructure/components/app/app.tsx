import HomePage from '../../../features/robots/pages/homePage/homePage';
import { Layout } from '../layout/layout';

export function App() {
    return (
        <div className="app">
            <Layout>
                <HomePage />
            </Layout>
        </div>
    );
}
