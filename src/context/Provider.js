import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const contextValue = {
    planetList,
  };

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
