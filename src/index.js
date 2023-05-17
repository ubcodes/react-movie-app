import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/* import {creatRoot} from 'react-dom/client';
const container = document.getElementById('app');
// const root =createRoot(container); //create root container if you use typeScript
creatRoot.render (<App tab='home' />);
 */