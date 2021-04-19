import React from 'react';
import CardNote from './CardNote';

const NoteList = () => (
  <ul>
    {Array.of('Trabalho', 'Trabalho', 'Estudos').map((category) => (
      <li>
        <div>{category}</div>
        <CardNote />
      </li>
    ))}
  </ul>
);

export default NoteList;
