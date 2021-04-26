import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CardNote from '../CardNote';
import './styles.css';

const NoteList = (props) => {
  const [note, setNote] = useState([]);
  const { notes, deleteNote } = props;

  const newNote = (newNotes) => {
    setNote([...newNotes]);
  };

  useEffect(() => {
    notes.register(newNote);
  });

  useEffect(() => (() => notes.unsubscribe(newNote)));

  return (
    <ul className="note-list">
      {note.map(({ title, text, category }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className="note-list_item" key={index}>
          <CardNote
            title={title}
            text={text}
            index={index}
            deleteNote={deleteNote}
            category={category}
          />
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
      category: PropTypes.string,
    }),
  ]).isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteList;
