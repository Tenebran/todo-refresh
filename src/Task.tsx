import React from 'react';

export type TasksPropsType = {
  id: string;
  isDone: boolean;
  title: string;
};

export const Task: React.FC<TasksPropsType> = ({ id, isDone, title }) => {
  return (
    <li>
      <input type="checkbox" id={id} checked={isDone} /> <span>{title}</span>
    </li>
  );
};
