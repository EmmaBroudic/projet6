import { annonces } from '../../data/data.jsx';

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
/*
function annonceslogements({ appartId, appartTitle }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div>
            {range.map((appartId) => appartTitle >= appartId ? <span key={appartId.toString()}>{appartTitle}</span> : null
            )}
        </div>
    )
}

export default annonceslogements*/