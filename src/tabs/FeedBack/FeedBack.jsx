import { Description } from '../../components/FeedBackComps/Description/Description.jsx';
import { FeedbackOptions } from '../../components/FeedBackComps/FeedBackOptions/FeedbackOptions.jsx';
import { Notification } from '../../components/FeedBackComps/Notification/Notification.jsx';
import { useState, useEffect } from 'react';
import { FeedbackResult } from '../../components/PointsComps/FeedbackResult/FeedbackResult.jsx';
const initialState = {
  good: 0,
  bad: 0,
  neutral: 0,
};
const FeedBack = () => {
  const [feedback, setFeedback] = useState(
    () => JSON.parse(localStorage.getItem('feedback')) || initialState,
  );
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);
  const resetCount = () => {
    setFeedback(initialState);
  };
  const handleClick = option => {
    setFeedback({ ...feedback, [option]: feedback[option] + 1 });
  };
  const total = Object.values(feedback).reduce((acc, value) => acc + value, 0);
  const positive = Math.floor((feedback.good * 100) / total);

  return (
    <>
      <Description />
      <FeedbackOptions
        handleClick={handleClick}
        resetCount={resetCount}
        total={total}
        buttonList={Object.keys(feedback)}
      />
      {total > 0 ? (
        <FeedbackResult
          result={[
            ...Object.entries(feedback),
            ['total', total],
            ['positive', positive],
          ]}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
export default FeedBack;
