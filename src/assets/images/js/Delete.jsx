import React from 'react';
import PropTypes from 'prop-types';

const Delete = ({ color, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill={color}
    onClick={onClick}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
  </svg>
);

Delete.defaultProps = {
  color: '#000',
  onClick: null,
};

Delete.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Delete;
