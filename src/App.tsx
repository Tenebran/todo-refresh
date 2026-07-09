import { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type TaskType = { id: string; isDone: boolean; title: string };

function App() {
  const todolistTitle1: string = 'What to learn';

  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: '1',
      isDone: true,
      title: 'HTML&CSS',
    },
    {
      id: '2',
      isDone: true,
      title: 'JS',
    },
    {
      id: '3',
      isDone: false,
      title: 'React',
    },
  ]);

  const removeTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <Todolist title={todolistTitle1} tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
