import { TaskForm } from '../../components/TasksComps/TaskForm/TaskForm.jsx';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { TaskList } from '../../components/TasksComps/TaskList/TaskList.jsx';
import { FilterTasks } from '../../components/TasksComps/FilterTasks/FilterTasks.jsx';

export const Tasks = () => {
  const [filter, setFilter] = useState('');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [],
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const addTask = text => {
    setTasks([...tasks, { text, id: nanoid() }]);
  };
  const taskDelete = id => {
    setTasks(
      tasks.filter(item => {
        return item.id !== id;
      }),
    );
  };
  console.log(tasks);
  const handleChange = e => {
    setFilter(e.target.value);
  };
  const filteredTasks = tasks.filter(item => {
    return item.text.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <>
      <TaskForm addTask={addTask} />
      <FilterTasks handleChange={handleChange} />
      <TaskList taskList={filteredTasks} taskDelete={taskDelete} />
    </>
  );
};
