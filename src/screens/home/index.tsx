import React from 'react';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';
import theme from '../../styles/theme';
import { Card } from '../../components/card';

function Home() {
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

      <S.DiscoverView>
        <S.TitleView>
          <S.Discover>Discover new book</S.Discover>
          <S.More>More</S.More>
        </S.TitleView>

        <Card
          title="Hooked"
          subtitle="Nir Eyal"
          pageCount="120+"
          imgUrl="http://books.google.com/books/content?id=-bF2CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api.png"
        />
      </S.DiscoverView>
    </S.Container>
  );
}

export { Home };
