import React from 'react';

export type TasksPropsType = {
  id: string;
  isDone: boolean;
  title: string;
  removeTask: (id: string) => void;
};

export const Task: React.FC<TasksPropsType> = ({ id, isDone, title, removeTask }) => {
  const onClickRemoveTaskHandler = () => removeTask(id);
  return (
    <li>
      <input type="checkbox" id={id} checked={isDone} /> <span>{title}</span>
      <button onClick={onClickRemoveTaskHandler}>x</button>
    </li>
  );
};
