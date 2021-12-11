import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Dr Appts',
            day: 'Feb 5th at 3:00pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Barber Appts',
             day: 'Feb 10th at 6:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Work Meeting',
            day: 'Feb 3th at 8:30am',
            reminder: false
        },
    ]
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000);

    const newTask = { id, ...task}

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==  id) + 1)
  } 

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
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
