import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { lang } from './lang/lang';

i18next.use(initReactI18next).init({
  resources: lang,
  lng: JSON.parse(localStorage.getItem('lang')) || 'uz'
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);