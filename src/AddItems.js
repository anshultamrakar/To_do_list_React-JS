import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItems = ({handleSubmit , setNewItem, newItem}) => {
const inputRef = useRef()
    return (
        <form className = "addForm" onSubmit = {handleSubmit}>
             <label htmlFor='addItem'>Add Item</label>
            <input
            type = "text"
            placeholder = "Add the Tasks"
            ref = {inputRef}
            id='addItem'
            type='text'
            required
            value = {newItem}
            onChange = {(e) => setNewItem(e.target.value)}
            />
            <button
            type='submit'
            aria-label='Add Item'
            onClick = {() => inputRef.current.focus()}
            >
            <FaPlus/>
            </button>
            
        </form>
    )
}

export default AddItems
