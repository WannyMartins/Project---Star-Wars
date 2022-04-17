import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const {
    onchange,
    filterByNumbers,
    coluna,
    valor,
    operador,
    setValor,
    setOperador,
    setColuna,
    setClicked,
  } = useContext(PlanetsContext);

  function onclick() {
    setClicked(true);
    filterByNumbers();
    return (
      <p>
        { coluna + operador + valor }
      </p>
    );
  }

  return (
    <form>
      <label htmlFor="coluna">
        Coluna
        <select
          name="coluna"
          id="coluna"
          data-testid="column-filter"
          value={ coluna }
          onChange={ (event) => onchange(event, setColuna) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="operador">
        Operador
        <select
          name="operador"
          id="operador"
          data-testid="comparison-filter"
          value={ operador }
          onChange={ (event) => onchange(event, setOperador) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="number">
        <input
          type="number"
          name="number"
          id="number"
          data-testid="value-filter"
          onClick={ () => setValor('') }
          value={ valor }
          onChange={ (event) => onchange(event, setValor) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onclick }
      >
        Filtrar
      </button>

    </form>
  );
}

export default Filters;
