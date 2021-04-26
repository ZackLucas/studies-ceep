import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const FormsRegister = ({ categories, ...props }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Sem Categoria');
  const [category, setCategory] = useState([]);

  const newCategory = (newCategories) => {
    setCategory([...newCategories]);
  };

  useEffect(() => {
    categories.register(newCategory);
  });

  useEffect(() => (() => categories.unsubscribe(newCategory)));

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const createNote = (event) => {
    event.preventDefault();
    event.stopPropagation();
    props.createNote(title, text, selectedCategory);
  };

  const handleChangeCategory = (e) => {
    e.stopPropagation();
    setSelectedCategory(e.target.value);
  };

  return (
    <form className="form-register" onSubmit={createNote}>
      <select onChange={handleChangeCategory} className="form-register_input">
        <option>Sem Categoria</option>
        {category.map((itemCategory, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={index}>{itemCategory}</option>
        ))}
      </select>
      <input
        className="form-register_input"
        type="text"
        placeholder="Título"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="form-register_input"
        rows={12}
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
  categories: PropTypes.shape([]).isRequired,
};

export default FormsRegister;
