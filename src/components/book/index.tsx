import React from 'react';

import * as S from './styles';

type BookProps = {
  imgUrl: string;
  title: string;
  author: string;
};

function Book({ imgUrl, title, author }: BookProps) {
  return (
    <S.Container>
      <S.Image
        style={{ width: 99, height: 153, borderRadius: 5 }}
        source={{
          uri: imgUrl,
        }}
      />
      <S.Title>{title}</S.Title>
      <S.Author>{author}</S.Author>
    </S.Container>
  );
}

export { Book };
