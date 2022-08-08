import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZXNhbnRpbGxhbjk3IiwiYSI6ImNsNmk2ZHQxcTBwcHAza241eW41c2RjeXcifQ.Iu-6vLIKN73IFe3_9RFtVA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
