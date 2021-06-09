import React from 'react';
import { FlatList, View } from 'react-native';

import { Book } from '../../components/book';
import { useBooks } from '../../hooks/useBooks';

import * as S from './styles';

function Libraries() {
  const { books } = useBooks();

  if (!books) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <S.NonReadingText>
          You need to start search a book first.
        </S.NonReadingText>
      </View>
    );
  }

  return (
    <S.Container>
      <S.SeachedBooks>Searched Books</S.SeachedBooks>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <Book
            id={item.id.toString()}
            key={item.id}
            imgUrl={item.volumeInfo.imageLinks?.smallThumbnail}
            title={item.volumeInfo.title}
            author={item.volumeInfo.authors.join(', ')}
          />
        )}
      />
    </S.Container>
  );
}

export { Libraries };
