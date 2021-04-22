import React from 'react';
import PropTypes from 'prop-types';

import CardNote from '../CardNote';
import './styles.css';

const NoteList = (props) => {
  const { notes } = props;

  return (
    <ul className="note-list">
      {notes.map(({ id, title, text }) => (
        <li className="note-list_item" key={id}>
          <CardNote title={title} text={text} />
        </li>
      ))}
    </ul>
  );
};

NoteList.propTypes = {
  notes: PropTypes.shape([
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ]).isRequired,
};

export default NoteList;
