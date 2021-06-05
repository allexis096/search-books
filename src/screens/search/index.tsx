import React from 'react';
import { FlatList } from 'react-native';

import { Book } from '../../components/book';
import { mock2 } from '../../components/book/mock';
import { BooksData } from '../home';

import * as S from './styles';

type SearchProps = {
  route?: {
    params: {
      hasClickedMore: boolean;
      carouselBooks: BooksData[];
    };
  };
};

function Search({ route }: SearchProps) {
  if (route?.params.hasClickedMore) {
    return (
      <S.Container>
        <FlatList
          data={route.params.carouselBooks}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
          renderItem={({ item }) => (
            <Book
              key={item.id}
              imgUrl={item.volumeInfo.imageLinks?.smallThumbnail}
              title={item.volumeInfo.title}
              author={item.volumeInfo.publisher}
            />
          )}
        />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <FlatList
        data={mock2}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
        renderItem={({ item }) => (
          <Book
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            author={item.author}
          />
        )}
      />
    </S.Container>
  );
}

export { Search };
