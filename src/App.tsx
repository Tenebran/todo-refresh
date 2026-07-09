import { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

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

  const addTasks = (title: string) => {
    setTasks([...tasks, { id: v1(), isDone: false, title }]);
  };

  return (
    <div className="app">
      <Todolist title={todolistTitle1} tasks={tasks} removeTask={removeTask} addTasks={addTasks} />
    </div>
  );
}

export default App;
