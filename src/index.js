import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import Main from './Main';
import Cursor from './Cursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Cursor />
        <Main />
    </React.StrictMode>
);
