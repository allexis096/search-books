import styled, { css } from 'styled-components/native';

type ContainerProps = {
  isReallySearch?: boolean;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, isReallySearch }) => css`
    margin: 0 auto;
    margin-top: 42px;
    padding: 0 20px;

    ${isReallySearch &&
    css`
      padding: 0;
    `};
  `};
`;

type ButtonLoadProps = {
  isLoading: boolean;
};

export const ButtonLoadMore = styled.TouchableOpacity<ButtonLoadProps>`
  ${({ theme, isLoading }) => css`
    margin: 0 auto;
    align-items: center;
    justify-content: ${isLoading ? 'space-around' : 'center'};
    flex-direction: ${isLoading ? 'row' : 'column'};
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
