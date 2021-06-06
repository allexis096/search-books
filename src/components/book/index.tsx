import React from 'react';
import { getImage } from '../../utils/getImage';

import * as S from './styles';

type BookProps = {
  imgUrl: string;
  title: string;
  author: string;
};

function Book({ imgUrl, title, author }: BookProps) {
  return (
    <S.Container>
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
