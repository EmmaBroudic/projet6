import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import Rating from '../Rating/rating.jsx';
import './host.css';
import '../../index.css';

/* Dans un premier temps, ce bloc de code sélectionne l'identifiant
indiqué dans l'url afin de retrouver les données correpondant au
logement sélectionné.
Ensuite, il affiche les informations concernant le propriétaire du
logement et affiche le composant Rating qui contient la note du
logement.*/

function Host() {

    const { id } = useParams();

    const logement = annonces.find(appartement => appartement.id === id);

    const { host } = logement;

    const nom = host.name;

    const photoIdentite = host.picture;
    

    return (
        <div className = "bloc-top-host">
            <div className = "host">
                <div className = "nom"><p>{ nom }</p></div>
                <img src = { photoIdentite } className = "img-host" alt = "img-host" />
            </div>
            <div className = "rating"><Rating /></div>
        </div>
    );
  }

export default Host