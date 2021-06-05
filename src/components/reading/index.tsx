import React from 'react';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Oval2Png from '../../../assets/images/Oval2.png';

import * as S from './styles';

function CurrentlyReading() {
  return (
    <S.ReadingView>
      <Image
        style={{
          width: 91,
          height: 136,
          borderRadius: 5,
          marginTop: -13,
          marginLeft: 20,
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
          <S.CardChapterText>
            Chapter <S.ChapterNumber>2</S.ChapterNumber> From 9
          </S.CardChapterText>
        </S.CardChapterView>
      </S.CurrentlyTextView>

      <Image source={Oval2Png} style={{ position: 'absolute', right: 0 }} />
    </S.ReadingView>
  );
}

export { CurrentlyReading };
