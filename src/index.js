import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FavouritesProvider } from './context/FavouritesContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </React.StrictMode>
);
