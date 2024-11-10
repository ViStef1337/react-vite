import { DescriptionPoints } from '../../components/PointsComps/DescriptionPoints/DescriptionPoints.jsx';
import { useEffect, useState } from 'react';
import { PointsButtons } from '../../components/PointsComps/PointsButtons/PointsButtons.jsx';
import { FeedbackResult } from '../../components/PointsComps/PointsResult/PointsResult.jsx';
import { NotificationPoints } from '../../components/PointsComps/NotificationPoints/NotificationPoints.jsx';
import { NotificationAfterReviewPoints } from '../../components/PointsComps/NotificationAfterReviewPoints/NotificationAfterReviewPoints.jsx';

export const Points = () => {
  const initialState = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  };
  const resetCount = () => {
    setFeedback(initialState);
  };
  const [feedback, setFeedback] = useState(
    () => JSON.parse(localStorage.getItem('feedback')) || initialState,
  );
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const handleClick = (option, index) => {
    setFeedback({ ...feedback, [option]: feedback[option] + 1 + index });
  };

  const total = Object.values(feedback).reduce((acc, value) => acc + value, 0);
  return (
    <>
      <DescriptionPoints />
      <PointsButtons
        buttonList={Object.keys(feedback)}
        handleClick={handleClick}
        total={total}
        resetCount={resetCount}
      />
      {total > 0 ? (
        <>
          <FeedbackResult
            result={[...Object.entries(feedback), ['total', total]]}
          />
          <NotificationAfterReviewPoints />
        </>
      ) : (
        <NotificationPoints />
      )}
    </>
  );
};
