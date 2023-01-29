import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      <li>
        <button className={s.button} value="good" onClick={onLeaveFeedback}>
          Good
        </button>
      </li>
      <li>
        <button className={s.button} value="neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
      </li>
      <li>
        <button className={s.button} value="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
