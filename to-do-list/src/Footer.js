
const Footer = ({length}) => {
    return (
        <footer>
            <p>{length} items {length === 1 ? "Task" : "Tasks"} Left </p>
        </footer>
    )
}



export default Footer
