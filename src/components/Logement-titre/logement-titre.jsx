import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import Host from '../Host/host.jsx';
import './logement-titre.css';

/* Dans un premier temps, ce bloc de code sélectionne l'identifiant
indiqué dans l'url afin de retrouver les données correpondant au
logement sélectionné.
Ensuite, les éléments "title", "location" et "tags" sont affichés.
Une action .map est effectuée sur les tags et le composant Host
est incrementé ici.*/

function LogementTitre() {

    const { id } = useParams();

    const logement = annonces.find(appartement => appartement.id === id);

    const { title, location, tags } = logement;


    return (
    <div className = "bloc-logement-top">
      <div className = "bloc-top-titre">
        <div className = "titre-logement-un">{title}</div>
        <div className = "localisation">{location}</div>
        <div className = "tags" >{tags.map((tag, index) => (<span className = "tag" key={`${index}-${tag}`}>{tag}</span>))}</div>
      </div>
      <div><Host /></div>
    </div>

    );
  }

export default LogementTitre