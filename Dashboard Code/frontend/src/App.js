import React from 'react';
import MainApp from './pages/MainApp';
import { UserProvider as AppProviders } from './contexts/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <AppProviders>
            <MainApp />
        </AppProviders>
    )
}

export default App;