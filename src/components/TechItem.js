import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ techValue, onDelete }) {
  return (
    <li key={techValue}>
      {techValue}
      <button onClick={onDelete} type="button">Remover</button>
    </li> 
  );
}

TechItem.defaultProps = {
  techValue: 'Oculto' 
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;