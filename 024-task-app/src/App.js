import { useState } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';

import './App.css';

const App = () => {
  const [task, setTask] = useState({ text: '', id: uniqid() });
  const [tasks, setTasks] = useState([]);

  const handleChange = e => {
    setTask({ text: e.target.value, id: task.id });
  };

  const onSubmitTask = e => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ text: '', id: uniqid() });
  };

  const handleDelete = id => {
    setTasks([...tasks.filter(task => task.id !== id)]);
  };

  return (
    <div>
      <form onSubmit={onSubmitTask} id='form'>
        <label htmlFor='taskInput'>Enter task</label>
        <input type='text' id='taskInput' onChange={handleChange} value={task.text} required />
        <button type='submit'>Add Task</button>
      </form>
      <Overview tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
