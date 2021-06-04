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

  return (
    <div>
      <form onSubmit={onSubmitTask}>
        <label htmlFor='taskInput'>Enter task</label>
        <input type='text' id='taskInput' onChange={handleChange} value={task.text} />
        <button type='submit'>Add Task</button>
      </form>
      <Overview tasks={tasks} />
    </div>
  );
};

export default App;
