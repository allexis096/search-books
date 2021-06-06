import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { getImage } from '../../utils/getImage';

import * as S from './styles';

type BookProps = {
  id: string;
  imgUrl: string;
  title: string;
  author: string;
};

function Book({ id, imgUrl, title, author }: BookProps) {
  const navigation = useNavigation();

  function handleBookDetail() {
    navigation.navigate('Detail', {
      id,
    });
  }

  return (
    <S.Container activeOpacity={0.7} onPress={handleBookDetail}>
      {getImage({
        url: imgUrl,
        more: true,
      })}
      <S.Title>{title}</S.Title>
      <S.Author>{author}</S.Author>
    </S.Container>
  );
}

export { Book };
