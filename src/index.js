import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'hashrouter';
import './index.css';
import App from './App';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));
