import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/HW1/HW1.css';
import App from './App';
import HW1 from './components/HW1/HW1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App data= {<HW1/>}/>
    </React.StrictMode>
);

