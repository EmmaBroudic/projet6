import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { annonces } from './data/annonces/annonces.jsx';
import Home from './pages/Home/home.jsx';
import APropos from './pages/Home/a-propos.jsx';
import Logement from './pages/Home/logement.jsx';
import Error from './components/Error/error.jsx';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

function App() {
  const redirect = useState({ Logement: false });

  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/logement/:id" element={<LogementWithRedirect redirect={redirect} />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

function LogementWithRedirect() {

  const { id } = useParams();

  if (!annonces.find((annonce) => annonce.id === id)) {
    return <Navigate to="/error" />;
  }

  return <Logement />;
}

root.render(<App />);
reportWebVitals();