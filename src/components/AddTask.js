const AddTask = () => {
    return (
        <form className='addForm'>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Task Name" id="" />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder="Add Day & Time" id="" />
            </div>
            <div className="form-control">
                <label>Set Reminder</label>
                <input type="checkbox" id="" />
            </div>
            <input type="submit" value='Save Tasks' />
        </form>
    )
}

export default AddTask
