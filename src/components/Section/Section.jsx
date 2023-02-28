import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrap, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <Title>{title}</Title>
      {children}
    </SectionWrap>
  );
};

export { Section };

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};