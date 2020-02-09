import React from 'react';

function TechItem({ techValue, onDelete }) {
  return (
    <li key={techValue}>
      {techValue}
      <button onClick={onDelete} type="button">Remover</button>
    </li> 
  );
}

export default TechItem;