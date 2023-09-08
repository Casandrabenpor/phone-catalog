import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

// import reportWebVitals from './reportWebVitals';
import { AdminPage } from './pages/adminPage';
import { DetailsPage } from './pages/detailsPhonePage';
import { CreatePage } from './pages/createPage';
import { LoginPage } from './pages/loginPage';
import { App } from './App';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/admin" element={<LoginPage />} /> */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/details/*" element={<DetailsPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
