import ItemList from './ItemList';
const Content = ({handleCheck , handleDelete, items}) => {

    return (
        <>
            {items.length ? (
                <ItemList
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                items = {items}
                />
            ) : (
                <p>Your list is empty </p>
            )}
           
           
        </>
    )
}

export default Content
