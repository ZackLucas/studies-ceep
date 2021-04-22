import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const FormsRegister = (props) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const createNote = (event) => {
    event.preventDefault();
    event.stopPropagation();
    props.createNote(title, text);
  };

  return (
    <form className="form-register" onSubmit={createNote}>
      <input
        className="form-register"
        type="text"
        placeholder="Título"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="form-register_input"
        rows={2}
        placeholder="Escreva sua nota..."
        value={text}
        onChange={handleTextChange}
      />
      <button
        className="form-register_input form-register_submit"
        type="submit"
      >
        Criar nota
      </button>
    </form>
  );
};

FormsRegister.propTypes = {
  createNote: PropTypes.func.isRequired,
};

export default FormsRegister;
