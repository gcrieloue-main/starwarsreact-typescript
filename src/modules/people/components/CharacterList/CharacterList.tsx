import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';
import { ApiCharacter } from '../../../swapi';

export type CharacterListProps = {
  characters?: ApiCharacter[] | null;
};

export const CharacterList = ({ characters }: CharacterListProps) => {
  if (!characters) return null;

  return (
    <div className={styles.list}>
      {!characters.length && <p>Aucun personnage trouvé</p>}
      {characters.map(character => (
        <div className={styles.row} key={character.url}>
          <div className={styles.name}>{character.name}</div>
          <div className={styles.gender}>{character.gender}</div>
          <NavLink to={`/people/${character.url.match(/.*([0-9]+)\/$/)![1]}`}>Let's go</NavLink>
        </div>
      ))}
    </div>
  );
};
