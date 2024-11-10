export const FeedbackResult = ({ result }) => {
  return (
    <div>
      {result.map(([key, value]) => {
        return (
          <p key={key}>
            {key} {value}
          </p>
        );
      })}
    </div>
  );
};
