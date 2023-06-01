import { Link } from 'react-router-dom';
import { annonces } from '../../data/annonces/annonces.jsx';
import './card.css';
 

function Appartements() {


	return (
		<div className = "card-container">

			{annonces.map((appartement) => (
				<Link className = "card" to = {`/logement/${appartement.id}`}>
					<figure key={appartement.id} >
						<h2>{appartement.title}</h2>
					</figure>
				</Link>
			))}
			
		</div>
	)
}


console.log(annonces);


export default Appartements
