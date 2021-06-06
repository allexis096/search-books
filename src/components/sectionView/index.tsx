import React from 'react';
import { GestureResponderEvent } from 'react-native';
import * as S from './styles';

type SectionViewProps = {
  title: string;
  buttonTitle: string;
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
};

function SectionView({
  title,
  buttonTitle,
  onPress,
  children,
}: SectionViewProps) {
  return (
    <S.SectionView>
      <S.TitleSectionView>
        <S.TitleTextSection>{title}</S.TitleTextSection>
        <S.ButtonSection onPress={onPress}>
          <S.TextButtonSection>{buttonTitle}</S.TextButtonSection>
        </S.ButtonSection>
      </S.TitleSectionView>

      {children}
    </S.SectionView>
  );
}

export { SectionView };
