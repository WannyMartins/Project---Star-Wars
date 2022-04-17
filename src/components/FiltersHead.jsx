import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FiltersHead() {
  const { valor, coluna, operador } = useContext(PlanetsContext);
  return (
    <div>
      <p>
        { coluna + operador + valor }
      </p>
    </div>
  );
}

export default FiltersHead;
