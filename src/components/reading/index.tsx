import React from 'react';
import { Alert, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Oval2Png from '../../../assets/images/Oval2.png';
import { getImage } from '../../utils/getImage';

import * as S from './styles';
import { useNavigation } from '@react-navigation/core';

type CurrentlyReadingProps = {
  webReaderLink: string;
  imgUrl: string;
  title: string;
  author: string;
};

function CurrentlyReading({
  imgUrl,
  title,
  author,
  webReaderLink,
}: CurrentlyReadingProps) {
  const navigation = useNavigation();

  function handleReadBook() {
    if (!webReaderLink) {
      return Alert.alert('The book is not able to read.');
    }

    navigation.navigate('Browser', {
      url: webReaderLink,
    });
  }

  return (
    <S.ReadingView activeOpacity={0.7} onPress={handleReadBook}>
      {getImage({
        url: imgUrl,
        currently: true,
      })}
      <S.CurrentlyTextView>
        <S.CurrentlyTextTitle>{title}</S.CurrentlyTextTitle>
        <S.CurrentlyTextSubtitle>{author}</S.CurrentlyTextSubtitle>

        <S.CardChapterView>
          <AntDesign name="book" size={16} color="#9013FE" />
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
