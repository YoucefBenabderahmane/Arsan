import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';
import global_en from './translation/en/global.json';
import global_ar from './translation/ar/global.json'
import { I18nextProvider } from 'react-i18next';



i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
     <App />
    </I18nextProvider>
 </BrowserRouter>
);




