import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const contextValue = {
    planetList,
  };

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

      const { results } = await fetch(endpoint).then((response) => response.json());
      setPlanetList(results);
    };
    getPlanets();
  });

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
