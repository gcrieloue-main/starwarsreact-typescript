import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setCharacter as setCharacterAction } from '../../../user/actions';
import { Loader, Button } from '../../../common-ui';
import { swAPI, ApiCharacter } from '../../../swapi';
import { AttributeLine } from './AttributeLine';

import styles from './styles.scss';
import { RouteComponentProps } from 'react-router';
import { Store } from '@store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type PeopleInfoProps = {
  name: string | null;
  setThisCharacterAsMyCharacter: (chracter: ApiCharacter) => void;
} & RouteComponentProps<{ id: string }>;

export const PeopleInfoComponent = ({ name, match, setThisCharacterAsMyCharacter }: PeopleInfoProps) => {
  const [character, setCharacter] = useState(null as ApiCharacter | null);

  useEffect(() => {
    swAPI.getCharacter(+match.params.id).then(char => {
      setCharacter(char);
    });
  }, [match.params.id]);

  if (!character) return <Loader />;

  let buttonText = 'Je veux être ça !';
  if (character.gender === 'male') {
    buttonText = 'Je veux être lui !';
  }
  if (character.gender === 'female') {
    buttonText = 'Je veux être elle !';
  }

  const onChoose = () => {
    setThisCharacterAsMyCharacter(character);
  };

  return (
    <div>
      <h2 className={styles.title}>{character.name}</h2>
      <AttributeLine label="Gender" value={character.gender} />
      <AttributeLine label="Hair color" value={character.hair_color} />
      <AttributeLine label="Mass" value={character.mass} />

      {name && <p>Vous êtes actuellement {name}</p>}
      <Button onClick={onChoose} secondary>
        {buttonText}
      </Button>
    </div>
  );
};

PeopleInfoComponent.defaultProps = {
  name: undefined,
};

const mapStateToProps = (state: Store) => ({
  name: state.user.character ? state.user.character.name : null,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<Store, undefined, AnyAction>) => ({
  setThisCharacterAsMyCharacter: (character: ApiCharacter) => dispatch(setCharacterAction(character)),
});

export const PeopleInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleInfoComponent);
