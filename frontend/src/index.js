import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/App';
import Favicon from 'react-favicon';
import ico from './img/favicon.ico';

ReactDOM.render(
    <React.StrictMode>
        <Favicon url={ico}/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);