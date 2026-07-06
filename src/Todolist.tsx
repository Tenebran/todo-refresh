import React from 'react';
import type { TaskType } from './App';

export type TaskPropsType = { title: string; tasks: TaskType[] };

export const Todolist: React.FC<TaskPropsType> = ({ title, tasks }) => {
  return (
    <div className="todolist">
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {tasks.map((t) => (
          <li>
            <input type="checkbox" id={t.id} checked={t.isDone} /> <span>{t.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};
