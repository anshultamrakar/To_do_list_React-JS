import { FaTrashAlt  } from 'react-icons/fa';
const LineItems = ({handleCheck, handleDelete , item}) => {
    return (
     
            <li className = "item" key = {item.id}>
                        <input
                        type = "checkbox"
                        checked = {item.checked}
                        onChange = {()=> handleCheck(item.id)}
                        />
                        <label>{item.task}</label>
                        <FaTrashAlt
                        onClick = {() => handleDelete(item.id)}
                        role = "button"
                        tabIndex = "0"
                        />
                    </li>
       
    )
}

export default LineItems
