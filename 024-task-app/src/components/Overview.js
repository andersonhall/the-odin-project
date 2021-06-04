const Overview = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={task.id}>
            {index + 1}. {task.text}
            <i className='far fa-trash-alt'></i>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
