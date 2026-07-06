import './App.css';
import { Todolist } from './Todolist';

export type TaskType = { id: string; isDone: boolean; title: string };

function App() {
  const todolistTitle1: string = 'What to learn';
  const todolistTitle2: string = 'What to buy';

  const tasks_1: TaskType[] = [
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
  ];

  const tasks_2: TaskType[] = [
    {
      id: '1',
      isDone: false,
      title: 'Bred',
    },
    {
      id: '2',
      isDone: false,
      title: 'Milk',
    },
    {
      id: '3',
      isDone: true,
      title: 'Coffe',
    },
  ];

  return (
    <div className="app">
      <Todolist title={todolistTitle1} tasks={tasks_1} />
      <Todolist title={todolistTitle2} tasks={tasks_2} />
    </div>
  );
}

export default App;
