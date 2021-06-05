import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    margin-right: 17px;
  `};
`;

export const Image = styled.Image`
  ${({ theme }) => css`
    width: 99px;
    height: 153px;
    border-radius: 5px;
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black275};
    font-size: 12px;
    font-family: ${theme.font.bold};
    margin-top: 9px;
  `};
`;

export const Author = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black275};
    font-size: 10px;
    font-family: ${theme.font.bold};
    margin: 5px 0 10px;
  `};
`;
