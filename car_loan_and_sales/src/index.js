import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Auth0Provider
    domain="dev-m1wfjl5fpkhgqg1k.us.auth0.com"
    clientId="2jIVvpj7KyM14AzPps4q0196auECQ87n"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);

