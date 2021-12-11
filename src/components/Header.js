import Button from "./Button"

const Header = ({title}) => {
    const onClick = (e) => {
        console.log('working')
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick} color="white" text="+"/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

// JS Var for css 
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header
