import React, { useState, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { CharacterList } from '../../components/CharacterList';
import { swAPI, ApiCharacter } from '../../../swapi';
import { TextInput, Button, Loader } from '../../../common-ui';

import styles from './styles.scss';
import { fetchAndSetCharacter } from '../../../user/actions';

export type PeopleComponentProps = {
  setRandomCharacter: any;
};

export const PeopleComponent = ({ setRandomCharacter }: PeopleComponentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [characters, setCharacters] = useState(null as ApiCharacter[] | null);

  const onSearch = () => {
    setIsLoading(true);
    swAPI.getCharacterList(value).then(data => {
      setCharacters(data.results);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <Button onClick={setRandomCharacter}>Set random character</Button>
      <div className={styles.form}>
        <TextInput
          className={styles.element}
          placeholder="Luke Skywalker"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
          value={value}
        />
        <Button onClick={onSearch}>Rechercher</Button>
      </div>
      {isLoading ? <Loader /> : <CharacterList characters={characters} />}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setRandomCharacter: () => {
    dispatch(fetchAndSetCharacter(Math.floor(Math.random() * 87) + 1));
  },
});

export const People = connect(
  null,
  mapDispatchToProps
)(PeopleComponent);
