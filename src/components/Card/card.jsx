import { Link } from 'react-router-dom';
import { annonces } from '../../data/annonces/annonces.jsx';
import './card.css';
import '../../index.css';
 

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

