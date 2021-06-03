import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { Feather } from '@expo/vector-icons';
import { Card, CardProps } from '../../components/card';
import theme from '../../styles/theme';

import * as S from './styles';
import { mock } from '../../components/card/mock';
import { View } from 'react-native';
import { CurrentlyReading } from '../../components/reading';

type CarouselProps = {
  item: CardProps;
};

function Home() {
  const renderItem = ({ item }: CarouselProps) => {
    return (
      <Card
        title={item.title}
        subtitle={item.subtitle}
        pageCount={item.pageCount}
        imgUrl={item.imgUrl}
      />
    );
  };

  return (
    <S.Container>
      <S.InputView>
        <Feather
          name="search"
          color={theme.colors.white100}
          size={16}
          style={{ position: 'absolute', top: 65, left: 15, zIndex: 10 }}
        />
        <S.Input
          placeholder="Search book"
          placeholderTextColor={theme.colors.black100}
        />
      </S.InputView>

      <S.NameView>
        <S.Text>
          Hi, <S.DecoratedText>Mehmed Al Fatih</S.DecoratedText> 👋
        </S.Text>
      </S.NameView>

      <S.SectionView>
        <S.TitleSectionView>
          <S.TitleTextSection>Discover new book</S.TitleTextSection>
          <S.ButtonSection>More</S.ButtonSection>
        </S.TitleSectionView>

        <View style={{ marginLeft: -90 }}>
          <Carousel
            layout="default"
            data={mock}
            renderItem={renderItem}
            sliderWidth={450}
            itemWidth={270}
          />
        </View>
      </S.SectionView>

      <S.SectionView>
        <S.TitleSectionView style={{ marginBottom: 30 }}>
          <S.TitleTextSection>Currently Reading</S.TitleTextSection>
          <S.ButtonSection>All</S.ButtonSection>
        </S.TitleSectionView>

        <CurrentlyReading />
      </S.SectionView>
    </S.Container>
  );
}

export { Home };
