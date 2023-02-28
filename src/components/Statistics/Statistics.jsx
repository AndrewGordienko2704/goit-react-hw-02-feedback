import React from 'react';
import PropTypes from 'prop-types';
import { Stats, Item } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Stats>
      <Item>
        <span>Good:</span>
        <span>{good}</span>
      </Item>
      <Item>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </Item>
      <Item>
        <span>Bad:</span>
        <span>{bad}</span>
      </Item>
      <Item>
        <span>Total:</span>
        <span>{total}</span>
      </Item>
      <Item>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </Item>
    </Stats>
  );
};

export { Statistics };

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};