import React from 'react';
import { useParams } from 'react-router-dom';
import { annonces } from '../../data/annonces/annonces.jsx';
import ReusableCollapse from '../ReusableCollapse/reu-collapse.jsx';
import './equipments.css';
import '../../index.css';

function Equipments() {
  const { id } = useParams();
  const logement = annonces.find(appartement => appartement.id === id);

  const annoncesData = logement ? [{
    id: logement.id,
    titre: <h2 className = "equi-titre">{"Equipement"}</h2>,
    descriptif: logement.equipments.map((item, index) => (
      <p className="equi-text" key={`${index}-${id}+"c"`}>{item}</p>
    )),
  }] : [];

  return (
    <div className = "equi-bloc">
      <ReusableCollapse data={annoncesData} />
    </div>
  );
}

export default Equipments;