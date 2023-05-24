
import { annonces } from '../../data/annonces.jsx';

function appartements() {
	const categories = annonces.reduce(
		(acc, appartement) =>
			acc.includes(appartement.category) ? acc : acc.concat(appartement.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{annonces.map((appartement) => (
					<li key={appartement.id}>{appartement.title}</li>
				))}
			</ul>
		</div>
	)
}


console.log(annonces);


export default appartements