import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CharacterList } from '../../components/CharacterList';
import { swAPI } from '../../../swapi';
import { TextInput, Button, Loader } from '../../../common-ui';

import styles from './styles.scss';
import { fetchAndSetCharacter } from '../../../user/actions';

export const PeopleComponent = ({ setRandomCharacter }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [characters, setCharacters] = useState(null);

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
          onChange={event => setValue(event.target.value)}
          value={value}
        />
        <Button onClick={onSearch}>Rechercher</Button>
      </div>
      {isLoading ? <Loader /> : <CharacterList characters={characters} />}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setRandomCharacter: () => {
    dispatch(fetchAndSetCharacter(Math.floor(Math.random() * 87) + 1));
  },
});

PeopleComponent.propTypes = {
  setRandomCharacter: PropTypes.func.isRequired,
};

export const People = connect(
  null,
  mapDispatchToProps
)(PeopleComponent);
