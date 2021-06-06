import styled, { css } from 'styled-components/native';

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
