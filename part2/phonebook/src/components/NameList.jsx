const NameList = ({ persons, search }) => (
    <div>
        <h2>Numbers</h2>
        {persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase())).map(person =>
            <p key={person.name}>{person.name} {person.number}</p>
        )}
    </div>
)

export default NameList