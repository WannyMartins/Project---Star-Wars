import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [valueInput, setValueInput] = useState('');
  const [coluna, setColuna] = useState('population');
  const [operador, setOperador] = useState('maior que');
  const [valor, setValor] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [filterNumberList, setFilterNumberList] = useState(planetList);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [saveFilterList, setSaveFilterList] = useState([]);
  useEffect(() => {
    try {
      const getPlanets = async () => {
        const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

        const { results } = await fetch(url).then((response) => response.json());
        setPlanetList(results);
      };
      getPlanets();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const filterByName = ({ target }) => {
    setValueInput(target.value);
  };

  const filterByNumbers = (planets) => {
    if (operador === 'maior que') {
      const maiorQ = planets.filter((item) => (item[coluna] > Number(valor)));
      setFilterNumberList(maiorQ);
      return filterNumberList;
    }
    if (operador === 'menor que') {
      const menorQ = planets.filter((item) => (item[coluna] < Number(valor)));
      setFilterNumberList(menorQ);

      return filterNumberList;
    }
    if (operador === 'igual a') {
      const igualA = planets.filter((item) => (item[coluna] === valor));
      setFilterNumberList(igualA);

      return filterNumberList;
    }
  };
  const onchange = (e, set) => {
    set(e.target.value);
  };

  const contextValue = {
    planetList,
    valueInput,
    filterByName,
    setColuna,
    setOperador,
    setValor,
    filterByNumbers,
    onchange,
    coluna,
    operador,
    valor,
    clicked,
    setClicked,
    filterNumberList,
    filterByNumericValues,
    setFilterByNumericValues,
    saveFilterList,
    setSaveFilterList,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
