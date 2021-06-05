import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import Carousel from 'react-native-snap-carousel';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator, Image, ScrollView, View } from 'react-native';

import theme from '../../styles/theme';
import DontMakeThinkImage from '../../../assets/images/dont-make-think-video.png';

import { mock } from '../../components/card/mock';
import { Card } from '../../components/card';
import { CurrentlyReading } from '../../components/reading';

import * as S from './styles';
import { Search } from '../search';

type BooksData = {
  id: string;
  volumeInfo: {
    title: string;
    publisher: string;
    pageCount: string;
    imageLinks: {
      smallThumbnail: string;
    };
  };
};

type CarouselProps = {
  item: BooksData;
};

function Home() {
  const [hasText, setHasText] = useState(false);
  const [text, setText] = useState('');
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [books, setBooks] = useState<BooksData[]>([]);
  const [carouselBooks, setCarouselBooks] = useState<BooksData[]>([]);
  const navigaton = useNavigation();

  const [{ loading: loadingBooks }, getBooksData] = useAxios(
    {
      method: 'get',
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    const delay = setTimeout(() => {
      if (text !== '') {
        getData(text);
      }
    }, 2000);

    return () => clearTimeout(delay);
  }, [text]);

  useEffect(() => {
    getCarousel();
  }, []);

  async function getData(text: string) {
    const { data } = await getBooksData({
      url: `https://www.googleapis.com/books/v1/volumes?q=${text}&startIndex=0`,
    });

    setBooks(data.items);
  }

  async function getCarousel() {
    const { data } = await getBooksData({
      url: `https://www.googleapis.com/books/v1/volumes?q=harry potter&startIndex=0`,
    });

    setCarouselBooks(data.items);
  }

  const renderItem = ({ item }: CarouselProps) => {
    return (
      <Card
        key={item.id}
        title={item.volumeInfo.title}
        publisher={item.volumeInfo.publisher}
        pageCount={item.volumeInfo.pageCount}
        imgUrl={`${item.volumeInfo.imageLinks?.smallThumbnail}.png`}
      />
    );
  };

  function handleChangeText(text: string) {
    if (text?.length > 0) {
      setText(text);
      return setHasText(true);
    }

    setHasText(false);
  }

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
          onChangeText={handleChangeText}
        />
      </S.InputView>
      {!hasText ? (
        <ScrollView showsVerticalScrollIndicator={false}>
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
              {loadingBooks ? (
                <ActivityIndicator />
              ) : (
                <Carousel
                  layout="default"
                  data={carouselBooks}
                  renderItem={renderItem}
                  sliderWidth={450}
                  itemWidth={270}
                />
              )}
            </View>
          </S.SectionView>

          <S.SectionView>
            <S.TitleSectionView style={{ marginBottom: 30 }}>
              <S.TitleTextSection>Currently Reading</S.TitleTextSection>
              <S.ButtonSection>All</S.ButtonSection>
            </S.TitleSectionView>

            <CurrentlyReading />
          </S.SectionView>

          <S.SectionView>
            <S.TitleSectionView style={{ marginBottom: 30 }}>
              <S.TitleTextSection>Reviews of The Days</S.TitleTextSection>
              <S.ButtonSection>All Video</S.ButtonSection>
            </S.TitleSectionView>

            <Image
              source={DontMakeThinkImage}
              style={{ width: 335, height: 181 }}
            />
          </S.SectionView>
        </ScrollView>
      ) : (
        <Search />
      )}
    </S.Container>
  );
}

export { Home };
