import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import  { useState } from 'react';
import './App.css';

function App() {

  const [items , setItems] = useState([
    {
        id : 1, 
        checked : false,
        task : "Complete the UI library"
    },
    {
        id : 2, 
        checked : false,
        task : " Make a profile in Twitter"
    },
    {
        id : 3, 
        checked : false,
        task : "learn about hooks in React "
    }

])

const handleCheck = (id) => {
 const listItems = items.map((item) => item.id === id ? {...item , checked : !item.checked} : item)
 setItems(listItems)
 localStorage.setItem('shoppingList', JSON.stringify(listItems))

}

const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems))
    
}
  return (
    <div className="App">
     <Header />
     <Content
     handleCheck = {handleCheck}
     handleDelete = {handleDelete}
     items = {items}
     />
     <Footer/>
    </div>
  );
}

export default App;
