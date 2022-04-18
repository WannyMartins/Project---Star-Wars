import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const {
    onchange,
    coluna,
    valor,
    operador,
    setValor,
    setOperador,
    setColuna,
    setClicked,
    setFilterByNumericValues,
    filterByNumericValues,
    multFilters,
    setColunasFiltradas,
    colunasFiltradas,
  } = useContext(PlanetsContext);

  function onclick() {
    setClicked(true);
    multFilters();
    setFilterByNumericValues([...filterByNumericValues,
      { coluna, operador, valor }]);
    setColunasFiltradas([...colunasFiltradas, coluna]);
  }

  const arrayColuna = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

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
          {colunasFiltradas.length === 0
            ? (
              arrayColuna.map((element) => (
                <option key={ element } value={ element }>{element}</option>
              )))
            : arrayColuna.filter((item) => !colunasFiltradas.includes(item))
              .map((element) => (
                <option key={ element } value={ element }>{element}</option>
              ))}
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
