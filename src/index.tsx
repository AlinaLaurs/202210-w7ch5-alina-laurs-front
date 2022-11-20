import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { App } from './infrastructure/components/app/app';
import { Provider } from 'react-redux';
import { appStore } from './infrastructure/store/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={appStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
