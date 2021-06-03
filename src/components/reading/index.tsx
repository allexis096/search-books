import React from 'react';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';

function CurrentlyReading() {
  return (
    <S.ReadingView>
      <Image
        style={{
          width: 91,
          height: 136,
          borderRadius: 5,
          position: 'absolute',
          left: 20,
          top: -13,
        }}
        source={{
          uri: 'http://books.google.com/books/content?id=-bF2CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api.png',
        }}
      />
      <S.CurrentlyTextView>
        <S.CurrentlyTextTitle>Originals</S.CurrentlyTextTitle>
        <S.CurrentlyTextSubtitle>by Adam Grant</S.CurrentlyTextSubtitle>

        <S.CardChapterView>
          <AntDesign name="book" size={20} color="#9013FE" />
          <S.CardChapterText>Chapter 2 From 9</S.CardChapterText>
        </S.CardChapterView>
      </S.CurrentlyTextView>
    </S.ReadingView>
  );
}

export { CurrentlyReading };
