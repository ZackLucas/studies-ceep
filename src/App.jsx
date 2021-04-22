import React, { useState } from 'react';
import FormsRegister from './components/FormsRegister';
import NoteList from './components/NoteList';

import './assets/app.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const createNote = (title, text) => {
    setNotes([...notes, { id: notes.length, title, text }]);
  };

  return (
    <>
      <FormsRegister createNote={createNote} />
      <NoteList notes={notes} />
    </>
  );
};

export default App;
