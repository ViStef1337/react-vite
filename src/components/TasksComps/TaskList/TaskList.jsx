export const TaskList = ({ taskList, taskDelete }) => {
  return (
    <ul>
      {taskList.map(item => {
        return (
          <li key={item.id}>
            <p>{item.text}</p>
            <button onClick={() => taskDelete(item.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};
