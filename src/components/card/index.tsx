import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../../styles/theme';
import OvalPng from '../../../assets/images/Oval.png';

import { getImage } from '../../utils/getImage';
import { BooksData } from '../../screens/home';
import { randomColors } from '../../styles/randomColors';

import * as S from './styles';

export type CardProps = {
  title: string;
  publisher: string;
  pageCount: string;
  imgUrl: string;
  selectedBook: React.RefObject<{
    currentIndex: string;
  }>;
  carouselBooks: BooksData[];
};

function Card({
  title,
  publisher,
  pageCount,
  imgUrl,
  selectedBook,
  carouselBooks,
}: CardProps) {
  const navigation = useNavigation();

  function handleSelectedBook() {
    const bookToRedirect = carouselBooks.find(
      (_, index) => Number(selectedBook.current?.currentIndex) === index
    );

    navigation.navigate('Detail', {
      id: bookToRedirect?.id,
    });
  }

  return (
    <S.CardView
      activeOpacity={0.7}
      color={randomColors}
      onPress={handleSelectedBook}
    >
      <Image source={OvalPng} style={{ position: 'absolute', bottom: 0 }} />
      <S.TextCardView>
        <S.TextCardTitle>{title}</S.TextCardTitle>
        <S.TextCardPublisher>{publisher}</S.TextCardPublisher>

        <S.CardLengthView>
          <MaterialIcons
            name="insert-chart-outlined"
            size={20}
            color={theme.colors.white175}
          />
          <S.TextCardBookLength>{pageCount} Read Now</S.TextCardBookLength>
        </S.CardLengthView>
      </S.TextCardView>

      {getImage({ url: imgUrl, carousel: true })}
    </S.CardView>
  );
}

export { Card };
