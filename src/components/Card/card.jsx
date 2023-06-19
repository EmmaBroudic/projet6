import { Link } from 'react-router-dom';
import { annonces } from '../../data/annonces/annonces.jsx';
import './card.css';

/* ce bloc de code fait un map sur les données du fichier annonce afin de
récupérer les informations titre et image et de les reproduire le nombre
de fois nécessaire. Par ailleurs, chaque card est cliquable et
dirige l'utilisateur vers une page logement dédiée avec un url qui comprend
l'identifiant du logement */

function Appartements() {

	return (
		<div className="card">
				{annonces.map((appartement, index) => (
					<Link key = {`${index}-${appartement.title}`} to = {`/logement/${appartement.id}`}>
						<div key={`${index}-${appartement.id}`} className="card-item">
							<h2>{appartement.title}</h2>
							<img
							className="img-card"
							src={appartement.cover}
							alt="img-appart"
							/>
						</div>
					</Link>
				))}
		</div>
	)
}


console.log(annonces);


export default Appartements

/* */

