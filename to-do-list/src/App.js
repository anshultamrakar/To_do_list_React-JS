import Header from './Header';
import Content from './Content';
import SearchItems from './SearchItems';
import AddItems from './AddItems';
import Footer from './Footer';
import  { useState } from 'react';
import './App.css';

function App() {
  const [items , setItems] = useState([
    {
    id : 1, 
    checked : false,
    task : "Complete the UI protion"
  },
  {
    id : 2, 
    checked : false,
    task : "Make a linkedin profile"
  },
  {
    id : 3, 
    checked : false,
    task : "Make a Twitter account "
  },
  {
    id : 4, 
    checked : false,
    task : "Make a Ecom project on React  "
  }
])

const [newItem , setNewItem] = useState('')
const [search , setSearch] = useState('')



const addItem = (item) => {
    const id = items.length ? items[items.length -1].id + 1 : 1;
    const myNewItem = {id , checked : false , items}
    const listItems = [...items , myNewItem]
    savedItems(listItems)
}


const handleSubmit = (e) => {
  e.preventDefault()
  if (!newItem) return;
    addItem(newItem);
    setNewItem('');
}


const savedItems = (newItems) => {
  setItems(newItems)
  localStorage.setItem('shoppingList', JSON.stringify(listItems))
}

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item , checked : !item.checked} : item)
  savedItems(listItems)

}

const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    savedItems(listItems)
    
}
  return (
    <div className="App">
     <Header title = "Get this shit done 👇"/>
     <SearchItems
       search={search}
       setSearch={setSearch}
     />
     <AddItems
      newItem = {newItem}
      setNewItem = {setNewItem} 
      handleSubmit = {handleSubmit}
     />
     <Content
     handleCheck = {handleCheck}
     handleDelete = {handleDelete}
     items = {items}
     />
     <Footer
      length= {items.length}
      />
    </div>
  );
}

export default App;
