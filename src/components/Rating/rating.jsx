
/*import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';*/
/*import './rating.css';
import '../../index.css';*/

import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './rating.css';

/* Dans un premier temps, ce bloc de code ajoute les fontAwesome.
Ensuite, il sélectionne l'identifiant
indiqué dans l'url afin de retrouver les données correpondant au
logement sélectionné.
Enfin, deux constantes sont créées afin d'afficher le nombre d'étoiles
rouges obtenues par le logement (note du logement sur 5)
et le nombre d'étoiles
grises (correspondant au points non-obtenus).*/

function Rating() {
  library.add(faStar);

  const { id } = useParams();

  const logement = annonces.find(appartement => appartement.id === id);
  
  const { rating } = logement;

  const repeatCountRed = rating;

  const repeatCountGrey = 5 - rating;

  const repeatedIconsRed = Array.from({ length: repeatCountRed }, (_, index) => (
    <FontAwesomeIcon className = "pad" key={index} icon={faStar} />
  ));

  const repeatedIconsGrey = Array.from({ length: repeatCountGrey }, (_, index) => (
    <FontAwesomeIcon className = "pad" key={index} icon={faStar} />
  ));

  return (
    <div className = "rating-box">
        <p className = "red">{repeatedIconsRed}</p>
        <p className = "grey">{repeatedIconsGrey}</p>
    </div>
  );
}

export default Rating;