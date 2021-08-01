import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    font-family: ${theme.font.regular};
  `};
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    background-color: ${theme.colors.white50};
    margin: 50px 0 20px;
    padding-left: 20px;
    border-radius: 10px;
    height: 48px;
    width: 100%;
    text-align: center;

    font-size: 22px;
    font-family: ${theme.font.regular};
  `};
`;

export const SendButton = styled.Button``;
