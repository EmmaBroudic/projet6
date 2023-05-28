import React, { useState } from 'react';
import './button-collapse.css';

function Button() {
    // Déclare une nouvelle variable d'état, que l'on va appeler « count »
    const [count, setCount] = useState(0);
  
    return (
      <div className="button-container">
        <p className="collapse-count">Vous avez cliqué {count} fois</p>
        <h2 className="titre-collapse">Titre 2</h2>
        <button className="button-count" onClick={() => setCount(count + 1)}>
          ^
        </button>
      </div>
    );
  }
  
  export default Button