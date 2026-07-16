import React, { useState } from 'react';
import type { FilterValueType, TaskType } from './App';
import { Task } from './Task';

export type TaskPropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: string) => void;
  addTasks: (title: string) => void;
  onClickFilterValueHandler: (value: FilterValueType) => void;
  changeTaskStatus: (id: string, event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

export const Todolist: React.FC<TaskPropsType> = ({
  title,
  tasks,
  removeTask,
  addTasks,
  onClickFilterValueHandler,
  changeTaskStatus,
}) => {
  const [newTasksTitle, setNewTasksTitle] = useState('');
  const [errorTaskTitle, setErrorTaskTitle] = useState<undefined | string>(undefined);

  const addTasHandler = () => {
    if (newTasksTitle.trim().length > 0 && newTasksTitle.trim().length < 15) {
      addTasks(newTasksTitle);
      setNewTasksTitle('');
      setErrorTaskTitle(undefined);
    } else if (newTasksTitle.trim().length > 15) {
      setErrorTaskTitle('your task is to long´');
    } else {
      setErrorTaskTitle('your task is empty');
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTasHandler();
    }
  };

  const onChangeTaskTitle = (title: string) => {
    setNewTasksTitle(title);
    setErrorTaskTitle(undefined);
  };

  return (
    <div className="todolist">
      <h3>{title}</h3>
      <div>
        <input
          value={newTasksTitle}
          onChange={(e) => onChangeTaskTitle(e.currentTarget.value)}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={addTasHandler} disabled={!!errorTaskTitle}>
          +
        </button>
        <div style={{ color: errorTaskTitle ? 'red' : '' }}>{errorTaskTitle}</div>
      </div>
      {tasks.length ? (
        <ul>
          {tasks.map((t) => {
            return (
              <Task
                id={t.id}
                title={t.title}
                isDone={t.isDone}
                removeTask={removeTask}
                changeTaskStatus={changeTaskStatus}
              />
            );
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
