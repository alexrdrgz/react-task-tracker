import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async() => {
    const resp = await fetch('http://localhost:5000/tasks')
    const data = await resp.json()

    return data
  }

  const fetchTask = async(id) => {
    const resp = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await resp.json()

    return data
  }

  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task}
    // setTasks([...tasks, newTask])
    const resp = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await resp.json()

    setTasks([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !==  id))
  } 

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

    const resp = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await resp.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !data.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      { 
        tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task To Show'
      }
    </div>
  );
}

export default App;
