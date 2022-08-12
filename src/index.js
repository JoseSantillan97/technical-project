import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationComponent from './Components/Information/InformationComponent';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZXNhbnRpbGxhbjk3IiwiYSI6ImNsNmk1ajBmczBlcHEza3ByemFqdWplbDMifQ.Sm5ztLEbYcviwqRqG6Kg5w';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/informacion" index element={<InformationComponent />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
