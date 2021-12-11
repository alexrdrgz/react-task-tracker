import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
                onClick={onAdd} 
                color={showAdd ? "red" : "white"} 
                text={showAdd ? "close" : "+"}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}


export default Header
