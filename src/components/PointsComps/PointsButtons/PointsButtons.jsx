export const PointsButtons = ({
  handleClick,
  resetCount,
  total,
  buttonList,
}) => {
  return (
    <ul>
      {buttonList.map((item, index) => {
        return (
          <li key={item}>
            <button onClick={() => handleClick(item, index)}>{item}</button>
          </li>
        );
      })}
      {total > 0 && (
        <li>
          <button onClick={resetCount}>reset</button>
        </li>
      )}
    </ul>
  );
};
