import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import UserProvider from './components/provider/userProvider';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <UserProvider>    
        <App />
    </UserProvider>
  </React.StrictMode>);

