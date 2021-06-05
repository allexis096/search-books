import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image, ScrollView } from 'react-native';

import theme from '../../styles/theme';
import Oval3Png from '../../../assets/images/Oval3.png';

import * as S from './styles';
import { useNavigation } from '@react-navigation/core';

function Detail() {
  const navigator = useNavigation();

  const adjustsmentMiddleButton = {
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.white160,
    borderRightWidth: 1,
    borderRightColor: theme.colors.white160,
    paddingLeft: 20,
    paddingRight: 20,
  };

  return (
    <S.Container>
      <S.Back onPress={() => navigator.navigate('Home')}>
        <Feather name="arrow-left" size={24} color="black" />
      </S.Back>
      <ScrollView>
        <S.BookView>
          <Image
            source={Oval3Png}
            style={{ position: 'absolute', top: 0, right: 0 }}
          />
          <S.Image
            source={{
              uri: 'http://books.google.com/books/content?id=11h7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            }}
          />
        </S.BookView>
        <S.ContentView>
          <S.ContentTitle>
            <S.BoldTitle>Hooked</S.BoldTitle> : How to Build Habid-Forming
            Products
          </S.ContentTitle>
          <S.Author>Nir Eyal</S.Author>
          <S.ContentBody>
            How do successful companies create products people can’t put down?
            {'\n'}
            {'\n'}
            Why do some products capture widespread attention while others flop?
            {'\n'}
            {'\n'}
            Why do some products capture widespread attention while others flop?
            {'\n'}
            {'\n'}
            Why do some products capture widespread attention while others flop?
            {'\n'}
            {'\n'}
            Why do some products capture widespread attention while others flop?
            {'\n'}
            {'\n'}
            Why do some products capture widespread attention while others flop?
            {'\n'}
            {'\n'}
            Why do some products capture widespread attention while others flop?
            {'\n'}
            {'\n'}
            Why do some products capture widespread attention while others flop?
          </S.ContentBody>
        </S.ContentView>
      </ScrollView>

      <S.FloatingOptionButtons>
        <S.OptionView>
          <Ionicons
            name="book-outline"
            size={20}
            color={theme.colors.white160}
          />
          <S.OptionText>Read</S.OptionText>
        </S.OptionView>

        <S.OptionView style={adjustsmentMiddleButton}>
          <FontAwesome5
            name="headphones"
            size={20}
            color={theme.colors.white160}
          />
          <S.OptionText>Listen</S.OptionText>
        </S.OptionView>

        <S.OptionView>
          <Feather name="share" size={20} color={theme.colors.white160} />
          <S.OptionText>Share</S.OptionText>
        </S.OptionView>
      </S.FloatingOptionButtons>
    </S.Container>
  );
}

export { Detail };
