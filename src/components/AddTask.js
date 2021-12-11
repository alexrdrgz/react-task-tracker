import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please Add Task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    } 

    return (

        <form className='addForm' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Task Name" value={text} onChange={(e) => setText(e.target.value)} id="" />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input value={day} type="text" placeholder="Add Day & Time" onChange={(e) => setDay(e.target.value)} id="" />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input checked={reminder} value={reminder} type="checkbox" id="" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input className="btn btn-block" type="submit" value='Save Tasks' />
        </form>
    )
}

export default AddTask
 