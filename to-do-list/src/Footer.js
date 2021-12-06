
const Footer = ({length}) => {
    return (
        <footer>
            <p>{length}  {length === 1 ? "Task" : "Tasks"} Left </p>
        </footer>
    )
}



export default Footer
