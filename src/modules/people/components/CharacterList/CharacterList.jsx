import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const CharacterList = ({ characters }) => {
  if (!characters) return null;

  return (
    <div className={styles.list}>
      {!characters.length && <p>Aucun personnage trouvé</p>}
      {characters.map(character => (
        <div className={styles.row} key={character.url}>
          <div className={styles.name}>{character.name}</div>
          <div className={styles.gender}>{character.gender}</div>
          <NavLink to={`/people/${character.url.match(/.*([0-9]+)\/$/)[1]}`}>Let's go</NavLink>
        </div>
      ))}
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      height: PropTypes.string,
      mass: PropTypes.string,
      hair_color: PropTypes.string,
      skin_color: PropTypes.string,
      eye_color: PropTypes.string,
      birth_year: PropTypes.string,
      gender: PropTypes.string,
      homeworld: PropTypes.string,
      films: PropTypes.arrayOf(PropTypes.string),
      species: PropTypes.arrayOf(PropTypes.string),
      vehicles: PropTypes.arrayOf(PropTypes.string),
      starships: PropTypes.arrayOf(PropTypes.string),
      created: PropTypes.string.isRequired,
      edited: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

CharacterList.defaultProps = {
  characters: null,
};
