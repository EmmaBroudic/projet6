const appartements = [
    'appt1',
    'appt2',
    'appt3',
]

const index = [1, 2, 3]

function List() {
    return (
        <ul>
            {appartements.map((appartement) => (
                <li key={`${appartement}-${index}`}>{ appartement }</li>
            ))}
        </ul>
    )
}

console.log(List);

export default List