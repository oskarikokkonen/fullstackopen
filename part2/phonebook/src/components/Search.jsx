const Search = ({search, setSearch}) => {
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <form>
      <div> filter shown with <input value={search} onChange={handleSearchChange}></input></div>
    </form>
  )
}

export default Search
