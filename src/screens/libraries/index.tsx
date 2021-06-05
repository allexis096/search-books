import React from 'react';
import { FlatList } from 'react-native';
import { Book } from '../../components/book';
import { mock2 } from '../../components/book/mock';
import * as S from './styles';

function Libraries() {
  return (
    <S.Container>
      <S.SeachedBooks>Searched Books</S.SeachedBooks>
      <FlatList
        data={mock2}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
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

export { Libraries };
