import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    margin: 0 20px;
  `};
`;

export const InputView = styled.View`
  ${({ theme }) => css`
    position: relative;
  `};
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    background-color: ${theme.colors.white50};
    margin-top: 50px;
    padding-left: 40px;
    border-radius: 10px;
    height: 48px;

    font-size: 16px;
    font-family: ${theme.font.regular};
  `};
`;

export const NameView = styled.View`
  ${({ theme }) => css`
    margin-top: 20px;
  `};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black100};
    font-size: 24px;
    font-family: ${theme.font.regular};
  `};
`;

export const DecoratedText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.red100};
    font-size: 24px;
    font-family: ${theme.font.regular};
  `};
`;

export const SectionView = styled.View`
  ${({ theme }) => css`
    margin-top: 30px;
  `};
`;

export const TitleSectionView = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  `};
`;

export const TitleTextSection = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black200};
    font-size: 18px;
    font-family: ${theme.font.regular};
  `};
`;

export const ButtonSection = styled.TouchableOpacity`
  ${({ theme }) => css``};
`;

export const TextButtonSection = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: 14px;
    font-family: ${theme.font.regular};
  `};
`;
