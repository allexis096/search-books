import React, { useEffect } from 'react';
import useAxios from 'axios-hooks';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { MaterialIcons } from '@expo/vector-icons';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Share,
  View,
} from 'react-native';

import theme from '../../styles/theme';
import Oval3Png from '../../../assets/images/Oval3.png';

import { getImage } from '../../utils/getImage';
import { randomColors } from '../../styles/randomColors';

import * as S from './styles';

const adjustsmentMiddleButton = {
  borderLeftWidth: 1,
  borderLeftColor: theme.colors.white160,
  borderRightWidth: 1,
  borderRightColor: theme.colors.white160,
  paddingLeft: 20,
  paddingRight: 20,
};

type DetailProps = {
  route: {
    params: {
      id: string;
    };
  };
};

function Detail({ route }: DetailProps) {
  const navigation = useNavigation();
  const [{ data: dataBook, loading: isLoadingBook }, getBook] = useAxios(
    {
      method: 'get',
      url: `https://www.googleapis.com/books/v1/volumes/${route.params.id}`,
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    getBook();
  }, []);

  async function shareBooks() {
    try {
      const title = dataBook?.volumeInfo.title ?? '';
      const subtitle = dataBook?.volumeInfo.subtitle ?? '';
      const bookReader = dataBook?.accessInfo.webReaderLink ?? '';

      await Share.share({
        message: `${title} - ${subtitle}\n\nLink to read: ${bookReader}`,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  if (isLoadingBook) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <S.Container>
      <S.Back onPress={() => navigation.navigate('Home')}>
        <Feather name="arrow-left" size={24} color="white" />
      </S.Back>
      <ScrollView>
        <S.BookView color={randomColors}>
          <Image
            source={Oval3Png}
            style={{ position: 'absolute', top: 0, right: 0 }}
          />
          {getImage({
            url: `${dataBook?.volumeInfo.imageLinks?.thumbnail}.png`,
            detail: true,
          })}
        </S.BookView>
        <S.ContentView>
          <S.BoldTitle>{dataBook?.volumeInfo.title}</S.BoldTitle>
          <S.ContentTitle>{dataBook?.volumeInfo.subtitle}</S.ContentTitle>
          <S.Author>{dataBook?.volumeInfo?.authors?.join(', ')}</S.Author>
          <S.ContentBody
            source={{
              html: dataBook?.volumeInfo.description || `<html></html>`,
            }}
          />
        </S.ContentView>
      </ScrollView>

      <S.FloatingWrapperView>
        <S.FloatingOptionButtons>
          <S.OptionView
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('Browser', {
                url: dataBook?.accessInfo.webReaderLink,
              })
            }
          >
            <Ionicons
              name="book-outline"
              size={20}
              color={theme.colors.white160}
            />
            <S.OptionText>Read</S.OptionText>
          </S.OptionView>

          <S.OptionView
            style={adjustsmentMiddleButton}
            onPress={() =>
              dataBook?.saleInfo.saleability === 'NOT_FOR_SALE'
                ? Alert.alert('This item is not for sale')
                : navigation.navigate('Browser', {
                    url: dataBook?.saleInfo.buyLink,
                  })
            }
          >
            <MaterialIcons
              name="attach-money"
              size={20}
              color={theme.colors.white160}
            />
            <S.OptionText>Buy</S.OptionText>
          </S.OptionView>

          <S.OptionView onPress={shareBooks}>
            <Feather name="share" size={20} color={theme.colors.white160} />
            <S.OptionText>Share</S.OptionText>
          </S.OptionView>
        </S.FloatingOptionButtons>
      </S.FloatingWrapperView>
    </S.Container>
  );
}

export { Detail };
