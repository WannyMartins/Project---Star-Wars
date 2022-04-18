import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterNameComponent from './FilterNameComponent';
import FilterNumbersComponent from './FilterNumbersComponent';
import Filters from './Filters';
import FiltersHead from './FiltersHead';

function Table() {
  const {
    // planetList,
    filterByName,
    // valueInput,
    clicked,
    // filterNumberList,
  } = useContext(PlanetsContext);
  return (
    <div>
      <label htmlFor="filterNamePlanets">
        <input
          type="search"
          placeholder="Search..."
          name="filterNamePlanets"
          id="filterNamePlanets"
          data-testid="name-filter"
          onChange={ filterByName }
        />
      </label>
      <Filters />
      <FiltersHead />
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
        <tbody>
          { clicked ? <FilterNumbersComponent /> : <FilterNameComponent />}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
