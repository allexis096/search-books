import React, { useEffect, useRef, useState } from 'react';
import useAxios from 'axios-hooks';
import Carousel from 'react-native-snap-carousel';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator, Image, ScrollView, View } from 'react-native';

import theme from '../../styles/theme';
import DontMakeThinkImage from '../../../assets/images/dont-make-think-video.png';

import { Card } from '../../components/card';
import { Search } from '../search';
import { SectionView } from '../../components/sectionView';
import { CurrentlyReading } from '../../components/reading';

import * as S from './styles';

export type BooksData = {
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

const randomQueries = ['harry potter', 'warcraft', 'javascript', 'technology'];

function Home() {
  const [hasText, setHasText] = useState(false);
  const [text, setText] = useState('');
  const selectedBook = useRef(null);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [books, setBooks] = useState<BooksData[]>([]);
  const [carouselBooks, setCarouselBooks] = useState<BooksData[]>([]);
  const navigation = useNavigation();

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
    const RANDOM_SUBJECT =
      randomQueries[Math.floor(Math.random() * randomQueries.length)];

    try {
      const { data } = await getBooksData({
        url: `https://www.googleapis.com/books/v1/volumes?q=${RANDOM_SUBJECT}`,
      });

      setCarouselBooks(data.items);
    } catch (err) {
      console.log(err);
    }
  }

  const renderBooks = ({ item }: CarouselProps) => {
    return (
      <Card
        key={item.id}
        title={item.volumeInfo.title}
        publisher={item.volumeInfo.publisher}
        pageCount={item.volumeInfo.pageCount}
        imgUrl={`${item.volumeInfo.imageLinks?.smallThumbnail}.png`}
        selectedBook={selectedBook}
        carouselBooks={carouselBooks}
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

  function handleClickedMore() {
    navigation.navigate('Search', {
      hasClickedMore: true,
      carouselBooks,
    });
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

          <SectionView
            title="Discover new book"
            buttonTitle="More"
            onPress={handleClickedMore}
          >
            <View style={{ marginLeft: -90 }}>
              {loadingBooks ? (
                <ActivityIndicator />
              ) : (
                <Carousel
                  layout="default"
                  data={carouselBooks}
                  renderItem={renderBooks}
                  sliderWidth={450}
                  itemWidth={270}
                  ref={selectedBook}
                />
              )}
            </View>
          </SectionView>

          <SectionView
            title="Currently Reading"
            buttonTitle="All"
            onPress={() => {}}
          >
            <CurrentlyReading />
          </SectionView>

          <SectionView
            title="Reviews of The Days"
            buttonTitle="All Video"
            onPress={() => {}}
          >
            <Image
              source={DontMakeThinkImage}
              style={{ width: 335, height: 181 }}
            />
          </SectionView>
        </ScrollView>
      ) : (
        <Search />
      )}
    </S.Container>
  );
}

export { Home };
