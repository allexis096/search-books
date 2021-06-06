import React from 'react';
import * as S from './styles';

export type GetImageProps = {
  url: string;
  carousel?: boolean;
  currently?: boolean;
  detail?: boolean;
  more?: boolean;
};

function getImage({ url, carousel, currently, detail, more }: GetImageProps) {
  const hasImage = url !== 'undefined.png' ? true : false;

  if (currently) {
    if (hasImage) {
      return <S.Image source={{ uri: url }} currently />;
    } else {
      return (
        <S.HasNoImage currently>
          <S.Text>Has no Image</S.Text>
        </S.HasNoImage>
      );
    }
  }

  if (carousel) {
    if (hasImage) {
      return <S.Image source={{ uri: url }} carousel />;
    } else {
      return (
        <S.HasNoImage carousel>
          <S.Text>Has no Image</S.Text>
        </S.HasNoImage>
      );
    }
  }

  if (detail) {
    if (hasImage) {
      return <S.Image source={{ uri: url }} detail />;
    } else {
      return (
        <S.HasNoImage detail>
          <S.Text>Has no Image</S.Text>
        </S.HasNoImage>
      );
    }
  }

  if (more) {
    if (hasImage) {
      return <S.Image source={{ uri: url }} more />;
    } else {
      return (
        <S.HasNoImage more>
          <S.Text>Has no Image</S.Text>
        </S.HasNoImage>
      );
    }
  }
}

export { getImage };
