import React from 'react';
import PropTypes from 'prop-types';

import DeleteSVG from '../../assets/images/js/Delete';

import './style.css';

const CardNote = ({
  title, text, index, deleteNote, category,
}) => (
  <section className="card-note">
    <header className="card-note_header">
      <h3 className="card-note_title">{title}</h3>
      <DeleteSVG color="#cc5555" onClick={() => deleteNote(index)} />
      <h4>{category}</h4>
    </header>
    <p className="card-notes-text">{text}</p>
  </section>
);

CardNote.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default CardNote;
