import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import { Provider } from 'react-redux';
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  
    <App />
 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
