import { Link } from 'react-router-dom';
import { annonces } from '../../data/annonces/annonces.jsx';
import './card.css';
 

function Appartements() {


	return (
		<div className = "card-container">

			{annonces.map((appartement, index) => (
				<Link className = "card" key = {`${index}-${appartement.title}`} to = {`/logement/${appartement.id}`}>
					<figure key = {`${index}-${appartement.id}`}>
						<h2>{appartement.title}</h2>
					</figure>
				</Link>
			))}

		</div>
	)
}


console.log(annonces);


export default Appartements
