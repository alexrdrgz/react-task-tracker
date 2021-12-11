import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
