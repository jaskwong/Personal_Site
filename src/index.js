import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {THEME_ID, THEMES} from "./constants";

// set up for dynamic theme change
const link = document.createElement('link');
link.setAttribute('rel', "stylesheet");
link.setAttribute('href', process.env.PUBLIC_URL + THEMES.light);
link.setAttribute('id', THEME_ID);
document.head.appendChild(link);

// get saved theme
let savedTheme = localStorage.getItem(THEME_ID)

ReactDOM.render(
    <React.StrictMode>
        <App theme={savedTheme}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();