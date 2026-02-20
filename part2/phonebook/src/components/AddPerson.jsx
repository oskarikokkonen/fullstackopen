const AddPerson = ({newName, newNumber, persons={persons}, setNewName, setNewNumber, setPersons}) => {

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
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
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div> name: <input value={newName} onChange={handleNameChange} /> </div>
        <div> number: <input value={newNumber} onChange={handleNumberChange} /> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddPerson