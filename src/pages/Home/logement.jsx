import { annonces } from '../../data/annonces/annonces.jsx';
import { useParams } from 'react-router-dom';
import Carroussel from '../../components/Carroussel/carroussel.jsx';
import Titre from '../../components/Logement-titre/logement-titre.jsx';
import Description from '../../components/Description/description.jsx';
import './logement.css';
import '../../index.css';

/* Dans un premier temps, ce bloc de code ajoute les fontAwesome.
Ensuite, il affiche les différents éléments qui composent une page
logement type.*/

function Logement() {

    const { id } = useParams();

    annonces.find(appartement => appartement.id === id);   

    return (
      <div className = "logement">
        <div className = "carroussel">
            <Carroussel />
        </div>
        <div className = "bloc-top">
            <Titre />           
        </div>
        <div className="bloc-bottom">
            <Description />
        </div>
      </div>
    );
  }

export default Logement

