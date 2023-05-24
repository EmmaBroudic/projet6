const appartements = [
    'appt1',
    'appt2',
    'appt3',
]

function List() {
    return (
        <ul>
            {appartements.map((appartement) => (
                <li>{appartement}</li>
            ))}
        </ul>
    )
}

export default List