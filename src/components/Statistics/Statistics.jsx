import PropTypes from 'prop-types';

import s from './Statistics.module.css';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return total >= 1 ? (
    <ul className={s.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
