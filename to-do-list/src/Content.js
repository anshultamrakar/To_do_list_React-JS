import ItemList from './ItemList';
const Content = ({handleCheck , handleDelete, items}) => {

    return (
        <main>
            <ItemList
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            items = {items}
            />
        </main>
    )
}

export default Content
