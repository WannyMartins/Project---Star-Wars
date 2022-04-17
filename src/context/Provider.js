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

  const filterByNumbers = () => {
    if (operador === 'maior que') {
      const maiorQ = planetList.filter((item) => (item[coluna] > Number(valor)));
      setFilterNumberList(maiorQ);
      return filterNumberList;
    }
    if (operador === 'menor que') {
      const menorQ = planetList.filter((item) => (item[coluna] < Number(valor)));
      setFilterNumberList(menorQ);

      return filterNumberList;
    }
    if (operador === 'igual a') {
      const igualA = planetList.filter((item) => (item[coluna] === valor));
      setFilterNumberList(igualA);

      return filterNumberList;
    }

    // switch (operador) {
    // case 'maior_que':
    // { const maiorQ = planetList.filter((item) => (item[coluna] > valor));
    //   setFilterNumberList(maiorQ);

    //   return filterNumberList; }

    // case 'menor_que':
    // { const menorQ = planetList.filter((item) => (item[coluna] < valor));
    //   setFilterNumberList(menorQ);

    //   return filterNumberList;
    // }
    // case 'igual_a':
    // { const igualA = planetList.filter((item) => (item[coluna] === valor));
    //   setFilterNumberList(igualA);

    //   return filterNumberList;
    // }
    // default: return <p>Parametro não Encontrado</p>;
    // }
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
