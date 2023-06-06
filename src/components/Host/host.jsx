import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import Rating from '../Rating/rating.jsx';
import './host.css';
import '../../index.css';

function Host() {

    const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL

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