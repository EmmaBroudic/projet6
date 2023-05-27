import { annonces } from '../../data/data.jsx';
import './card.css';
 

function Appartements() {

	const categories = annonces.reduce(
		(acc, appartement) =>
			acc.includes(appartement.category) ? acc : acc.concat(appartement.category),
		[]
	)

	return (
		<div className="card-container">
			{categories.map((cat) => (
				<span key={cat}>{cat}</span>
			))}

			{annonces.map((appartement) => (
				<figure className="card" key={appartement.id}><h2>{appartement.title}</h2></figure>
			))}
		</div>
	)
}


console.log(annonces);


export default Appartements