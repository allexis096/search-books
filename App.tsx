import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Navigation } from './src/navigation';

import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
    'SFProfDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
