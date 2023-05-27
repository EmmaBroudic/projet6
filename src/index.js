import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.jsx';
import APropos from './pages/Home/a-propos';
import Error from './components/Error/error.jsx';

//import App from './App';
//import annonces from 'annonces.json';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/header.jsx';

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
