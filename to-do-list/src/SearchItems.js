const SearchItems = ({handleSubmit , search }) => {
    return (
        <form className = "searchForm" onSubmit = {handleSubmit}>
            <label htmlFor = "search">Search</label>
            <input 
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Tasks'
                value={search}
              
            />
        </form>
    )
}

export default SearchItems
