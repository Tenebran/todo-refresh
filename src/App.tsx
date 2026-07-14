import { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type TaskType = { id: string; isDone: boolean; title: string };
export type FilterValueType = 'all' | 'active' | 'completed';

function App() {
  const [filterValue, setFilterValue] = useState<FilterValueType>('all');

  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: v1(),
      isDone: true,
      title: 'HTML&CSS',
    },
    {
      id: v1(),
      isDone: true,
      title: 'JS',
    },
    {
      id: v1(),
      isDone: false,
      title: 'React',
    },
  ]);

  const todolistTitle1: string = 'What to learn';

  const removeTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const addTasks = (title: string) => {
    setTasks([...tasks, { id: v1(), isDone: false, title }]);
  };

  const getFilteredTasks = (allTasks: TaskType[], filter: FilterValueType): TaskType[] => {
    switch (filter) {
      case 'active':
        return allTasks.filter((t) => !t.isDone);
      case 'completed':
        return allTasks.filter((t) => t.isDone);
      default:
        return allTasks;
    }
  };

  const filteredTasksForRender: TaskType[] = getFilteredTasks(tasks, filterValue);

  const onClickFilterValueHandler = (value: FilterValueType) => {
    setFilterValue(value);
  };

  return (
    <div className="app">
      <Todolist
        title={todolistTitle1}
        tasks={filteredTasksForRender}
        removeTask={removeTask}
        addTasks={addTasks}
        onClickFilterValueHandler={onClickFilterValueHandler}
      />
    </div>
  );
}

export default App;
