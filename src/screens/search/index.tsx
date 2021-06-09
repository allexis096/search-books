import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import { Book } from '../../components/book';
import { BooksData } from '../../hooks/useBooks';

import * as S from './styles';

type SearchProps = {
  route?: {
    params: {
      hasClickedMore: boolean;
      carouselBooks: BooksData[];
      hasClickedAll: boolean;
      currentlyReading: BooksData[];
    };
  };
  books: BooksData[];
  setPaginationIndex: React.Dispatch<React.SetStateAction<number>>;
  loadingBooks: boolean;
};

function Search({
  route,
  books,
  setPaginationIndex,
  loadingBooks,
}: SearchProps) {
  if (route?.params.hasClickedMore || route?.params.hasClickedAll) {
    return (
      <S.Container>
        <FlatList
          data={
            route?.params.hasClickedMore
              ? route.params.carouselBooks
              : route.params.currentlyReading
          }
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
          renderItem={({ item }) => (
            <Book
              key={item.id}
              id={item.id}
              imgUrl={`${item.volumeInfo.imageLinks?.smallThumbnail}.png`}
              title={item.volumeInfo.title}
              author={item.volumeInfo.authors?.join(', ')}
            />
          )}
        />
      </S.Container>
    );
  }

  function handleLoadMore() {
    setPaginationIndex((prev) => prev + 1);
  }

  return (
    <S.Container isReallySearch>
      <FlatList
        data={books}
        keyExtractor={(item) => String(item?.id)}
        numColumns={3}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
        renderItem={({ item }) => (
          <Book
            key={item.id}
            id={item.id}
            imgUrl={`${item.volumeInfo.imageLinks?.smallThumbnail}.png`}
            title={item.volumeInfo.title}
            author={item.volumeInfo.authors?.join(', ')}
          />
        )}
        ListFooterComponent={
          books.length > 0 ? (
            <S.ButtonLoadMore onPress={handleLoadMore} isLoading={loadingBooks}>
              <S.TextLoadMore>Load more</S.TextLoadMore>
              {loadingBooks && <ActivityIndicator color="white" />}
            </S.ButtonLoadMore>
          ) : null
        }
      />
    </S.Container>
  );
}

export { Search };
