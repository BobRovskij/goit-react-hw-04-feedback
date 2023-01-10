import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={style.statistics__optionList}>
            <li className={style.statistics__option}>Good: {good}</li>
            <li className={style.statistics__option}>Neutral: {neutral}</li>
            <li className={style.statistics__option}>Bad: {bad}</li>
            <li className={style.statistics__option}>Total: {total()}</li>
            <li className={style.statistics__option}>Positive feedback: {positivePercentage()}%</li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};