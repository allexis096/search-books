import styled, { css } from 'styled-components/native';

export const ReadingView = styled.View`
  ${({ theme }) => css`
    width: 331px;
    height: 100px;
    background-color: ${theme.colors.green};
    margin-left: -20px;
    margin-bottom: 20px;
    flex-direction: row;
    position: relative;
  `};
`;

export const CurrentlyTextView = styled.View`
  ${({ theme }) => css`
    margin-left: 8px;
    margin-top: 10px;
  `};
`;

export const CurrentlyTextTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.playFairBold};
    font-size: 20px;
    color: ${theme.colors.black300};
  `};
`;

export const CurrentlyTextSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.roboto};
    font-size: 10px;
    color: ${theme.colors.gray100};
    margin-top: 5px;
    margin-bottom: 22px;
  `};
`;

export const CardChapterView = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
  `};
`;

export const CardChapterText = styled.Text`
  ${({ theme }) => css`
    margin-left: 5px;
    font-family: ${theme.font.regular};
    font-size: 10px;
  `};
`;

export const ChapterNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.red100};
  `};
`;
