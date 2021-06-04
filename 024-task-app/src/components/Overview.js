const Overview = ({ tasks, handleDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={task.id}>
            {index + 1}. {task.text}
            <span>
              <i className='far fa-trash-alt' onClick={() => handleDelete(task.id)}></i>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
