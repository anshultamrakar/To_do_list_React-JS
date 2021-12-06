import LineItems from './LineItems';
const ItemList = ({handleCheck, handleDelete, items}) => {
    return (
            <ul>
                {items.map((item) => (
                   <LineItems
                   key = {item.id}
                   item = {item}
                   handleCheck = {handleCheck}
                   handleDelete = {handleDelete}
                   /> 
                ))}
            </ul>
    )
}

export default ItemList
