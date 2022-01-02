import Header from './Header';
import Content from './Content';
import SearchItems from './SearchItems';
import AddItems from './AddItems';
import Footer from './Footer';
import  { useState, useEffect } from 'react';
import apiRequest from './apiRequest';
import './App.css';




function App() {
const API_URL = "http://localhost:3400/items"

const [items , setItems] = useState([])
const [newItem , setNewItem ] = useState('')
const [search , setSearch ] = useState('')
const [fetchError , setFetchError] = useState(null)
const [loading , setLoading] = useState(true)



useEffect(() => {
const fetchItems = async() => {
  try{
  const response = await fetch(API_URL)
  const listItems = await response.json()
  if (!response.ok) throw Error("Did not recieve the expected data") 
  setItems(listItems) 
  }catch(err){
  setFetchError(err.message)
  } finally{
   setLoading(false)
  }
}
setTimeout(() => {
  fetchItems()
},2000)
 
},[])




const addItems = async (task) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id , checked : false , task}
  const listItems = [...items, myNewItem]
  setItems(listItems)
 
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myNewItem)
  }
  const result = await apiRequest(API_URL, postOptions);
  if (result) setFetchError(result);
} 

const handleCheck = async (id) => {
  const listItems = items.map((item) => item.id === id ? {...item , checked : !item.checked} : item)
  setItems(listItems)

  const myItem = listItems.filter((item) => item.id === id )
  const updateOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ checked: myItem[0].checked })
  };
  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, updateOptions);
  if (result) setFetchError(result);


}



const handleDelete = async (id) => {
  const listItems =  items.filter((item) => item.id !== id )
  setItems(listItems) 

  const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  
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
     <main>
     {loading && <p> Loading Items ....</p>}
     {fetchError && <p style = {{ color : "red"}}>{`${fetchError}`}</p>}
     { !fetchError && !loading && <Content
     items= {items.filter(item => ((item.task).toLowerCase()).includes(search.toLowerCase()))}
     handleCheck = {handleCheck}
     handleDelete = {handleDelete}
     />
    }

     </main>
   
     <Footer
      length= {items.length}
      />
    </div>
  );
}

export default App;
