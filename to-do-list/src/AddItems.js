import { FaPlus } from 'react-icons/fa';

const AddItems = ({handleSubmit , setNewItem}) => {

    return (
        <form className = "addForm" onSubmit = {handleSubmit}>
             <label htmlFor='addItem'>Add Item</label>
            <input
            type = "text"
            placeholder = "Add the Tasks"
            id='addItem'
            type='text'
            required
            onChange = {(e) => setNewItem(e.target.value)}
            />
            <button
            type='submit'
            aria-label='Add Item'
            >
            <FaPlus/>
            </button>
            
        </form>
    )
}

export default AddItems
