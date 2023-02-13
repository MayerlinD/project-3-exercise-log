import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/AppPage/App'; 
import { BrowserRouter as Router } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);