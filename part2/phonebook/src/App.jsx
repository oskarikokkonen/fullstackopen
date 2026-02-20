import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName.trim(),
      number: newNumber.trim()
    }

    const exists = persons.some(person => person.name === newName)

    if (exists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div> filter shown with <input value={search} onChange={handleSearchChange}></input></div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div> name: <input value={newName} onChange={handleNameChange}/> </div>
        <div> number: <input value={newNumber} onChange={handleNumberChange}/> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase())).map(person => 
        <p key={person.name}>{person.name} {person.number}</p>
        )}
      </div>
    </div>
  )

}

export default App