import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../styles/theme';
import { useBooks } from '../../hooks/useBooks';

import * as S from './styles';

function Welcome() {
  const navigator = useNavigation();
  const { setName } = useBooks();
  const [nameToChange, setNameToChange] = useState('');

  function handleChangeName() {
    if (!nameToChange) {
      return Alert.alert('You need to put a name, dude.');
    }

    setName(nameToChange);

    navigator.navigate('Home');
  }

  return (
    <S.Container>
      <S.Title accessibilityLabel="title">What is your name? 😎</S.Title>
      <S.Input
        placeholder="Your name"
        placeholderTextColor={theme.colors.black100}
        value={nameToChange}
        onChangeText={(value) => setNameToChange(value)}
        clearButtonMode="always"
      />
      <S.SendButton title="Send" onPress={handleChangeName} />
    </S.Container>
  );
}

export { Welcome };
