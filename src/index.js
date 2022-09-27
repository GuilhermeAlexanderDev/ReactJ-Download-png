import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './Header';
import App from './App';
import Main from './Main';

//Font -> react-fontawesome
// Link: https://youtu.be/oHmz42qRfho

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <App />
    <Main />
  </StrictMode>
);
