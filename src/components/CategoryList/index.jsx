/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const CategoryList = ({ categories, addCategory }) => {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState([]);

  const handlerInput = (e) => {
    if (e.key === 'Enter') {
      addCategory(e.target.value);
    }
  };

  const newCategory = (newCategories) => {
    setCategory([...newCategories]);
  };

  useEffect(() => {
    categories.register(newCategory);
  });

  useEffect(() => (() => categories.unsubscribe(newCategory)));

  return (
    <section className="category-section">
      <ul>
        {category.map((itemCategory, index) => (
          <li key={index}>{itemCategory}</li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={handlerInput}
        placeholder="Adicionar Categoria"
      />
    </section>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.shape().isRequired,
  addCategory: PropTypes.func.isRequired,
};

export default CategoryList;
