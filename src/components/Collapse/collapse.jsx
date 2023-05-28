import React, { useState } from 'react';
import './collapse.css';

function Example() {
  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  const [count, setCount] = useState(0);

  return (
    <div className="collapse-container">
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
      <h2 className="titre-collapse">Titre 2</h2>
      <p className="text-collapse">Texte bla bla bla</p>
    </div>
  );
}

export default Example