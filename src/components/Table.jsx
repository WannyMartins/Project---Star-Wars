import React, { useEffect, useState } from 'react';

const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Table() {
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(endpoint).then((response) => response.json());
      setPlanetList(results);
    };
    getPlanets();
  });

  return (
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
      { planetList.map((item, index) => (
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
            <td>{item.created}</td>
            <td>{item.edited}</td>
            <td>{item.url}</td>
          </tr>
        </tbody>
      ))}

    </table>
  );
}

export default Table;