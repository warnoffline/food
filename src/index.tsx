import App from './app';
import '@/configs/configureMobX';
import React from 'react';
import './styles/styles.css';
import './styles/Roboto/fonts.css';
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

if (module.hot) {
  module.hot.accept();
}
