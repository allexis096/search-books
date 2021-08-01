import React, { useEffect, useRef, useState } from 'react';
import useAxios from 'axios-hooks';
import Carousel from 'react-native-snap-carousel';
import { Feather as SearchIcon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  View,
} from 'react-native';

import theme from '../../styles/theme';
import DontMakeThinkImage from '../../../assets/images/dont-make-think-video.png';

import { Card } from '../../components/card';
import { Search } from '../search';
import { BooksData, useBooks } from '../../hooks/useBooks';
import { SectionView } from '../../components/sectionView';
import { CurrentlyReading } from '../../components/reading';

import * as S from './styles';

type CarouselProps = {
  item: BooksData;
};

const randomQueries = [
  'harry potter',
  'warcraft',
  'javascript',
  'naruto',
  'league of legends',
];

function Home() {
  const navigation = useNavigation();
  const selectedBook = useRef(null);
  const { name, books, setBooks, currentlyReading, setCurrentlyReading } =
    useBooks();
  const [hasText, setHasText] = useState(false);
  const [carouselBooks, setCarouselBooks] = useState<BooksData[]>([]);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [text, setText] = useState('');

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
  }, [text, paginationIndex]);

  useEffect(() => {
    getCarousel();
  }, []);

  async function getData(inputText: string) {
    try {
      const { data } = await getBooksData({
        url: `https://www.googleapis.com/books/v1/volumes?q=${inputText}&startIndex=${paginationIndex}`,
      });

      setBooks((prev) => [...prev, ...data.items]);
    } catch (err) {
      console.log(err);
    }
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
        setCurrentlyReading={setCurrentlyReading}
      />
    );
  };

  function handleChangeText(text: string) {
    if (text?.length === 0) {
      setBooks([]);
      setPaginationIndex(0);
    }

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

  function handleClickedAll() {
    navigation.navigate('Search', {
      hasClickedAll: true,
      currentlyReading,
    });
  }

  return (
    <S.Container>
      <S.InputView>
        <SearchIcon
          name="search"
          color={theme.colors.white100}
          size={16}
          style={{ position: 'absolute', top: 65, left: 15, zIndex: 10 }}
        />
        <S.Input
          placeholder="Search book"
          placeholderTextColor={theme.colors.black100}
          onChangeText={handleChangeText}
          clearButtonMode="always"
        />
      </S.InputView>
      {!hasText ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.NameView>
            <S.Text>
              Hi, <S.DecoratedText>{name}</S.DecoratedText> 👋
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
            onPress={handleClickedAll}
          >
            {currentlyReading.length > 0 ? (
              <CurrentlyReading
                imgUrl={`${currentlyReading[0].volumeInfo.imageLinks?.smallThumbnail}.png`}
                title={currentlyReading[0].volumeInfo.title}
                author={currentlyReading[0].volumeInfo.authors?.join(', ')}
                webReaderLink={currentlyReading[0].accessInfo.webReaderLink}
              />
            ) : (
              <S.NonReadingText>
                You need to start reading a book first.
              </S.NonReadingText>
            )}
          </SectionView>

          <SectionView
            title="Reviews of The Days"
            buttonTitle="All Video"
            onPress={() =>
              Alert.alert("Is there video in this API? I did'nt find LMAO")
            }
          >
            <Image
              source={DontMakeThinkImage}
              style={{ width: 335, height: 181 }}
            />
          </SectionView>
        </ScrollView>
      ) : (
        <Search
          books={books}
          setPaginationIndex={setPaginationIndex}
          loadingBooks={loadingBooks}
        />
      )}
    </S.Container>
  );
}

export { Home };
