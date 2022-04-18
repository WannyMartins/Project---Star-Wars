import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FiltersHead() {
  const { filterByNumericValues } = useContext(PlanetsContext);

  return (
    <div>
      <ul>
        {filterByNumericValues.map((item, index) => (
          <li key={ index }>
            {`${item.coluna} | ${item.operador} | ${item.valor}`}
            <button
              type="button"
              onClick={ (e) => e.target.parentNode.remove() }
            >
              Excluir

            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FiltersHead;
