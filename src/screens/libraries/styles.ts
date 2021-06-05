import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    margin-top: 42px;
    padding: 0 20px;
  `};
`;

export const SeachedBooks = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black100};
    font-size: 24px;
    font-family: ${theme.font.regular};
    margin-bottom: 20px;
  `};
`;
