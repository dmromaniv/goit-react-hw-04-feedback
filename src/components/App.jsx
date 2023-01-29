import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = event => {
    const feedbackOption = event.target.value;
    setFeedback(prevState => ({
      ...feedback,
      [feedbackOption]: prevState[feedbackOption] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, el) => (acc += el), 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) return 0;

    return Math.ceil((feedback.good / totalFeedback) * 100);
  };

  const { good, neutral, bad } = feedback;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};
