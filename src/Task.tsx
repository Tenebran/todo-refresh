import React from 'react';

export type TasksPropsType = {
  id: string;
  isDone: boolean;
  title: string;
  removeTask: (id: string) => void;
  addTasks: (title: string) => void;
};

export const Task: React.FC<TasksPropsType> = ({ id, isDone, title, removeTask }) => {
  return (
    <li>
      <input type="checkbox" id={id} checked={isDone} /> <span>{title}</span>
      <button onClick={() => removeTask(id)}>x</button>
    </li>
  );
};
