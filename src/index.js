import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.jsx';
import APropos from './pages/Home/a-propos.jsx';
import Logement from './pages/Home/logement.jsx';
import Error from './components/Error/error.jsx';
//import Redirection from './components/Redirection/redirection.jsx';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
      <Router>
        <Header />
            <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = "/a-propos" element = {<APropos />} />
              <Route path = "/logement/:id" element = {<Logement />} />
              <Route path = "*" element = {<Error />} />
            </Routes>
        <Footer />
      </Router>
  </React.StrictMode>,
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
