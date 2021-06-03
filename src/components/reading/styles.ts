import styled, { css } from 'styled-components/native';

export const ReadingView = styled.View`
  ${({ theme }) => css`
    width: 331px;
    height: 100px;
    background-color: ${theme.colors.green};
    margin-left: -20px;
  `};
`;

export const CurrentlyTextView = styled.View`
  ${({ theme }) => css``};
`;

export const CurrentlyTextTitle = styled.Text`
  ${({ theme }) => css``};
`;

export const CurrentlyTextSubtitle = styled.Text`
  ${({ theme }) => css``};
`;

export const CardChapterView = styled.View`
  ${({ theme }) => css``};
`;

export const CardChapterText = styled.Text`
  ${({ theme }) => css``};
`;
