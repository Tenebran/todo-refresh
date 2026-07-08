import React from 'react';
import type { TaskType } from './App';
import { Task } from './Task';

export type TaskPropsType = { title: string; tasks: TaskType[] };

export const Todolist: React.FC<TaskPropsType> = ({ title, tasks }) => {
  return (
    <div className="todolist">
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      {tasks.length ? (
        <ul>
          {tasks.map((t) => (
            <Task id={t.id} title={t.title} isDone={t.isDone} />
          ))}
        </ul>
      ) : (
        <span>Your tasks list is empty</span>
      )}
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};
