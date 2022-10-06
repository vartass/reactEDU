import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/HW1/HW1.css';
import App from './App';
import HW1 from './components/HW1/HW1';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
 <Provider store={}>
        <App data= {<HW1/>}/>
 </Provider>

    // </React.StrictMode>
);

