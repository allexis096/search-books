import React from 'react';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';
import { ActivityIndicator } from 'react-native';

import { Navigation } from './src/navigation';

import theme from './src/styles/theme';
import { BooksProvider } from './src/hooks/useBooks';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
    'SFProfDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={theme}>
      <BooksProvider>
        <Navigation />
      </BooksProvider>
    </ThemeProvider>
  );
}
