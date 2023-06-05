import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import './logement-titre.css';
import '../../index.css';

function LogementTitre() {

    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL

    const logement = annonces.find(appartement => appartement.id === id);

    const { title, location, tags } = logement;


    return (
    <div className = "bloc-top-titre">
        <div className = "titre-logement-un">{title}</div>
        <div className = "localisation">{location}</div>
        <div className = "tags" >{tags.map((tag, index) => (<span className = "tag" key={`${index}-${tag}`}>{tag}</span>))}</div>
    </div>
    );
  }

export default LogementTitre