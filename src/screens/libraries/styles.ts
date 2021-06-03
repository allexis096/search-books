import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `};
`;

export const BookView = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellow};
    width: 376px;
    height: 282px;
  `};
`;

export const Image = styled.Image`
  ${({ theme }) => css`
    width: 151px;
    height: 234px;
    margin: 84px auto 0;
    border-radius: 5px;
  `};
`;

export const ContentView = styled.View`
  ${({ theme }) => css`
    margin-top: 67px;
    padding: 0 20px;
  `};
`;

export const BoldTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black250};
    font-size: 24px;
    font-family: ${theme.font.bold};
  `};
`;
export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black250};
    font-size: 24px;
    font-family: ${theme.font.regular};
  `};
`;

export const Author = styled.Text`
  ${({ theme }) => css`
    margin: 7px 0 10px;
    color: ${theme.colors.red100};
    font-family: ${theme.font.regular};
    font-size: 16px;
  `};
`;

export const ContentBody = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black275};
    font-family: ${theme.font.regular};
    font-size: 14px;
  `};
`;

export const FloatingOptionButtons = styled.View`
  ${({ theme }) => css`
    position: absolute;
    bottom: 15px;
    margin-left: 20px;
    width: 335px;
    height: 56px;
    flex-direction: row;
    background: ${theme.colors.white50};
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    border-radius: 2px;
    justify-content: space-between;
    padding: 0 20px;
  `};
`;

export const OptionView = styled.View`
  ${({ theme }) => css`
    margin: 20px 0;
    align-items: center;
    flex-direction: row;
  `};
`;

export const OptionText = styled.Text`
  ${({ theme }) => css`
    margin-left: 10px;
    font-family: ${theme.font.bold};
    font-size: 14px;
  `};
`;
