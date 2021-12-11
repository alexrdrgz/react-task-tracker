const Button = ({text, color, onClick}) => {
    return <button onClick={onClick} style={{ color: color }}className="btn">{text}</button>
}

export default Button
