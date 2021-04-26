/* eslint-disable react/jsx-no-bind */
import React from 'react';

import FormsRegister from './components/FormsRegister';
import NoteList from './components/NoteList';
import CategoryList from './components/CategoryList/index';

import NoteArray from './data/NoteArray';
import Categories from './data/Categories';

import './assets/app.css';

const categories = new Categories({});
const noteArray = new NoteArray({});

const App = () => (
  <section className="main">
    <FormsRegister
      categories={categories}
      createNote={noteArray.addNotes.bind(noteArray)}
    />
    <main className="content-main">
      <CategoryList
        // eslint-disable-next-line react/jsx-no-bind
        addCategory={categories.addCategory.bind(categories)}
        categories={categories}
      />
      <NoteList
        notes={noteArray}
        deleteNote={noteArray.deleteNotes.bind(noteArray)}
      />
    </main>
  </section>
);

export default App;
