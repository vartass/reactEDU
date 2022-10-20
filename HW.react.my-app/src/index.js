import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import store from "./redux/configStore";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./components/HW8/router/AppRoutes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    </Provider>

    // </React.StrictMode>
);

