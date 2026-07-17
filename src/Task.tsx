import React from 'react';

export type TasksPropsType = {
  id: string;
  isDone: boolean;
  title: string;
  removeTask: (id: string) => void;
  changeTaskStatus: (id: string, event: React.ChangeEvent<HTMLInputElement, Element>) => void;
};

export const Task: React.FC<TasksPropsType> = ({
  id,
  isDone,
  title,
  removeTask,
  changeTaskStatus,
}) => {
  const onClickRemoveTaskHandler = () => removeTask(id);
  return (
    <li>
      <input type="checkbox" id={id} checked={isDone} onChange={(e) => changeTaskStatus(id, e)} />
      <span>{title}</span>
      <button onClick={onClickRemoveTaskHandler}>x</button>
    </li>
  );
};
