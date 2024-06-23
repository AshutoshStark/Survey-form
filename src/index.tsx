import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './GolobelContext/UserContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </UserProvider>
);

