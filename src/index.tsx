// @ts-nocheck
import ReactDOM from 'react-dom/client';
import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import App from './pages/app';
import UserApp from './pages/userApp';
import { AboutPage } from './pages/aboutPage';

// App
const appDiv = document.getElementById('app');
const root = ReactDOM.createRoot(appDiv);

root.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/user/:user_id" element={<UserApp />} />
            <Route path="/help" element={<AboutPage />} />
        </Routes>
    </HashRouter>
);
