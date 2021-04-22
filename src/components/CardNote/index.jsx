import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const CardNote = ({ title, text }) => (
  <section className="card-note">
    <header className="card-note_header">
      <h3 className="card-note_title">{title}</h3>
    </header>
    <p className="card-notes-text">{text}</p>
  </section>
);

CardNote.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardNote;
