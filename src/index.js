import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './StyleCss/Loading.css';
import './StyleCss/Slider.css';
import  './StyleCss/Dashboard.css';
import './StyleCss/Nav.css';
import './StyleCss/CartProduct.css';
import './StyleCss/Shopping.css';
import './StyleCss/DetailsStyle.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './rtk/Store.js';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <BrowserRouter>
            <Provider store={store}>
              <App />
            </Provider>
          </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
