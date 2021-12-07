const SearchItems = () => {
    return (
        <form className = "searchForm" >
            <label htmlFor = "search">Search</label>
            <input 
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Tasks'
               
              
            />
        </form>
    )
}

export default SearchItems
