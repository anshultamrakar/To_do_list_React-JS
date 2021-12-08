import ItemList from './ItemList';
const Content = ({handleCheck , handleDelete, items}) => {

    return (
        <>
            <ItemList
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            items = {items}
            />
        </>
    )
}

export default Content
