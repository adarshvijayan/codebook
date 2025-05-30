import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ScrollToTop} from "./components"
import { FilterProvider, CartProvider } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <CartProvider>
      <FilterProvider>
          <ScrollToTop />
          <ToastContainer closeButton={false} autoClose={3000}/>
          <App />
      </FilterProvider>
    </CartProvider>
      
    </BrowserRouter>
 
  </React.StrictMode>
);

