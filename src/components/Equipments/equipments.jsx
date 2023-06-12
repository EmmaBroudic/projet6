import React from 'react';
import { useParams } from 'react-router-dom';
import { annonces } from '../../data/annonces/annonces.jsx';
import ReusableCollapse from '../ReusableCollapse/reu-collapse.jsx';
import './equipments.css';
import '../../index.css';

function Equipments() {
  const { id } = useParams();
  const logement = annonces.find(appartement => appartement.id === id);

  const annoncesData = logement
    ? [
        {
          id: logement.id,
          titre: "Equipement",
          descriptif: logement.equipments.map((item, index) => (
            <p className="texte-equipement" key={`${index}-${id}+"c"`}>{item}</p>
          )),
        },
      ]
    : [];

  return (
    <div>
      <ReusableCollapse data={annoncesData} />
    </div>
  );
}

export default Equipments;