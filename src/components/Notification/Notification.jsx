import React from 'react';
import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

export { Notification };

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};