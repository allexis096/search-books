import React from 'react';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as S from './styles';
import theme from '../../styles/theme';
import OvalPng from '../../../assets/images/Oval.png';

export type CardProps = {
  title: string;
  publisher: string;
  pageCount: string;
  imgUrl: string;
};

function Card({ title, publisher, pageCount, imgUrl }: CardProps) {
  return (
    <S.CardView>
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

      <Image
        style={{
          width: 72,
          height: 111,
          borderRadius: 5,
        }}
        source={{
          uri: imgUrl,
        }}
      />
    </S.CardView>
  );
}

export { Card };
