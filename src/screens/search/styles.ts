import styled, { css } from 'styled-components/native';

type ContainerProps = {
  isReallySearch?: boolean;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, isReallySearch }) => css`
    margin-top: 42px;
    padding: 0 20px;

    ${isReallySearch &&
    css`
      padding: 0;
    `};
  `};
`;

export const ButtonLoadMore = styled.TouchableOpacity`
  ${({ theme }) => css`
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.red100};
    border-radius: 5px;
    height: 30px;
    width: 120px;
  `};
`;

export const TextLoadMore = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white100};
    font-family: ${theme.font.bold};
  `};
`;
