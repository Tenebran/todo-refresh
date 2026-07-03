import './App.css';
import { Todolist } from './Todolist';

function App() {
  const todolistTitle1: string = 'What to learn';
  const todolistTitle2: string = 'What to buy';

  return (
    <div className="app">
      <Todolist title={todolistTitle1} />
      <Todolist title={todolistTitle2} />
    </div>
  );
}

export default App;
