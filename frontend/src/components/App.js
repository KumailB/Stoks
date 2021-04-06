import React from 'react';
import { Provide, Provider } from 'react-redux';
import { Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store';
import Stocks from './portfolio/Stocks';
import Header from './layout/Header';
import Register from './accounts/Register';
import Login from './accounts/Login'

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: "top center"
}

const App = () => {
    return (
        <Provider store={store}>
            <AlertProvider>
                <div>
                    <Header />
                    <Login/>
                    <>Your portfoliso handler.</>
                    <Stocks/>
                </div>
            </AlertProvider>
        </Provider>
    );
}

export default App;