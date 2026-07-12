import React, { useState } from 'react';
import type { FilterValueType, TaskType } from './App';
import { Task } from './Task';

export type TaskPropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: string) => void;
  addTasks: (title: string) => void;
  onClickFilterValueHandler: (value: FilterValueType) => void;
};

export const Todolist: React.FC<TaskPropsType> = ({
  title,
  tasks,
  removeTask,
  addTasks,
  onClickFilterValueHandler,
}) => {
  const [newTasksTitle, setNewTasksTitle] = useState('');

  const addTasHandler = () => {
    addTasks(newTasksTitle);
    setNewTasksTitle('');
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTasHandler();
    }
  };

  console.log(newTasksTitle);

  return (
    <div className="todolist">
      <h3>{title}</h3>
      <div>
        <input
          value={newTasksTitle}
          onChange={(e) => setNewTasksTitle(e.currentTarget.value)}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={addTasHandler}>+</button>
      </div>
      {tasks.length ? (
        <ul>
          {tasks.map((t) => {
            return <Task id={t.id} title={t.title} isDone={t.isDone} removeTask={removeTask} />;
          })}
        </ul>
      ) : (
        <span>Your tasks list is empty</span>
      )}
      <div>
        <button onClick={() => onClickFilterValueHandler('all')}>All</button>
        <button onClick={() => onClickFilterValueHandler('active')}>Active</button>
        <button onClick={() => onClickFilterValueHandler('completed')}>Completed</button>
      </div>
    </div>
  );
};
