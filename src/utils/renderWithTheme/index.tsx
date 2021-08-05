import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { BooksProvider } from '../../hooks/useBooks';

import theme from '../../styles/theme';

export const renderWithTheme = (children: React.ReactNode) =>
  render(
    <ThemeProvider theme={theme}>
      <BooksProvider>{children}</BooksProvider>
    </ThemeProvider>
  );
