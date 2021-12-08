import Header from './Header';
import Content from './Content';
import SearchItems from './SearchItems';
import AddItems from './AddItems';
import Footer from './Footer';
import  { useState , useEffect } from 'react';
import './App.css';

function App() {
const API_URL = 'http://localhost:3500/items'
const [items , setItems] = useState([])
const [newItem , setNewItem ] = useState('')
const [search , setSearch ] = useState('')
const [fetchError , setFetchError ] = useState(null)
const [isLoading , setIsLoading ] = useState(true)

useEffect(() => {
  const fetchItems = async() => {
    try {
      const response = await fetch(API_URL)
      if(!response.ok) throw Error('Did not receive the expected data')
      const listItems = await response.json()
      console.log(listItems)
      setItems(listItems)
    }catch(err){
      setFetchError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  setTimeout(() =>
    fetchItems()
, 2000)

},[])


const addItems = (task) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id , checked : false , task}
  const listItems = [...items, myNewItem]
  setItems(listItems)
}

const handleSubmit = (e) => {
 e.preventDefault();
 if(!newItem) return ;
 addItems(newItem)
  setNewItem('')
}

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item , checked : !item.checked} : item)
  setItems(listItems)
}

const handleDelete = (id) => {
  const listItems =  items.filter((item) => item.id !== id )
  setItems(listItems) 
}
  return (
    <div className="App">
     <Header title = " Get this shit done 👇"/>
     <AddItems
     newItem = {newItem}
     handleSubmit = {handleSubmit}
     setNewItem = {setNewItem}
     />
     <SearchItems
     search = {search}
     setSearch = {setSearch}
     />
<main>
  {isLoading &&  <p> loading .....</p> }
  {fetchError && <p style = {{color : "red"}}>{`Error : ${fetchError}`}</p>}
{!fetchError  && <Content
     items = {items.filter(item => ((item.task).toLowerCase()).includes(search.toLowerCase()))}
    
     handleCheck = {handleCheck}
     handleDelete = {handleDelete}
     />}
</main>
    
    
     <Footer
      length= {items.length}
      />
    </div>
  );
}

export default App;
