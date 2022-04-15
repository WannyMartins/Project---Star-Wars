import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planetList } = useContext(PlanetsContext);
  const [valueInput, setValueInput] = useState('');

  const filterByName = ({ target }) => {
    setValueInput(target.value);
  };

  return (
    <div>
      <label htmlFor="filterNamePlanets">
        <input
          type="text"
          name="filterNamePlanets"
          id="filterNamePlanets"
          data-testid="name-filter"
          onChange={ filterByName }
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Rotation Period
            </th>
            <th>
              Orbital Period
            </th>
            <th>
              Diameter
            </th>
            <th>
              Climate
            </th>
            <th>
              Gravity
            </th>
            <th>
              Terrain
            </th>
            <th>
              Surface Water
            </th>
            <th>
              Population
            </th>
            <th>
              Films
            </th>
            <th>
              Created
            </th>
            <th>
              Edited
            </th>
            <th>
              Url
            </th>
          </tr>
        </thead>
        {planetList.filter((item) => item.name.includes(valueInput))
          .map((item, index) => (
            <tbody key={ index }>
              <tr>
                <td>{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            </tbody>
          ))}

      </table>
    </div>
  );
}

export default Table;
