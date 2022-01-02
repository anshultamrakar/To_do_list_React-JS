import Header from './Header';
import Content from './Content';
import SearchItems from './SearchItems';
import AddItems from './AddItems';
import Footer from './Footer';
import  { useState } from 'react';
import './App.css';




function App() {

const [items , setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')))
const [newItem , setNewItem ] = useState('')
const [search , setSearch ] = useState('')


const setAndSavedItem = (newItem) => {
   setItems(newItem)
   localStorage.setItem('shoppingList', JSON.stringify(newItem))
}


const addItems = (task) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id , checked : false , task}
  const listItems = [...items, myNewItem]
  setAndSavedItem(listItems)
 

}

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item , checked : !item.checked} : item)
  setAndSavedItem(listItems)
}



const handleDelete = (id) => {
  const listItems =  items.filter((item) => item.id !== id )
  setAndSavedItem(listItems) 
  
}


const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem) return ;
  addItems(newItem)
   setNewItem('')
 }
 
  

  return (
    <div className="App">
     <Header title = " Get this work done 👇"/>
     <AddItems
     newItem = {newItem}
     handleSubmit = {handleSubmit}
     setNewItem = {setNewItem}
     />
     <SearchItems
     search = {search}
     setSearch = {setSearch}
     />
    <Content
     items= {items.filter(item => ((item.task).toLowerCase()).includes(search.toLowerCase()))}
     handleCheck = {handleCheck}
     handleDelete = {handleDelete}
     />
     <Footer
      length= {items.length}
      />
    </div>
  );
}

export default App;
