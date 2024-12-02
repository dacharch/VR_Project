import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css" ;
import StateProvider from './contextApi/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  
    <StateProvider>
       <App />
    </StateProvider>

);

reportWebVitals();
