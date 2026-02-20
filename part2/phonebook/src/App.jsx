import { useState } from 'react'
import NameList from './components/NameList'
import AddPerson from './components/AddPerson'
import Search from './components/Search'

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


  return (
    <div>
      <h2>Phonebook</h2>
      <Search search={search} setSearch={setSearch} />
      <AddPerson newName={newName} newNumber={newNumber} persons={persons} setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons}/>
      <NameList persons={persons} search={search} />
    </div>
  )

}

export default App