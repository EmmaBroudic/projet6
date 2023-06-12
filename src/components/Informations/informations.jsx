import React from 'react';
import ReusableCollapse from '../ReusableCollapse/reu-collapse.jsx';
import { infos } from '../../data/infos/infos.jsx';
import './informations.css';
import '../../index.css';

/* Dans un premier temps, ce bloc de code utilise les données informations présentes
dans le fichier infos.jsx.
Ensuite, ces données sont passées en tant que props dans
le composant ReusableCollapse. Ainsi, il est possible d'afficher
ou masquer le texte contenu dans le bloc comportant la className
"infos-bloc".
Ces éléments sont visibles dans la page A propos.
 */

function Infos() {
  
  const infosData = infos.map((info) => ({
    id: info.id,
    titre: <h2 className = "infos-titre">{info.title}</h2>,
    descriptif: <p className = "infos-text">{info.text}</p>,
  }));

  return (
    <div className = "infos-bloc">
      <ReusableCollapse data = { infosData } />
    </div>
  );
}

export default Infos;