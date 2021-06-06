import styled, { css } from 'styled-components/native';
import { GetImageProps } from '.';

type ImageProps = Omit<GetImageProps, 'url'>;

export const Image = styled.Image<ImageProps>`
  ${({ currently, carousel, detail, more }) => css`
    ${currently &&
    css`
      width: 91px;
      height: 136px;
      border-radius: 5px;
      margin-top: -13px;
      margin-left: 20px;
    `};

    ${carousel &&
    css`
      width: 72px;
      height: 111px;
      border-radius: 5px;
    `};

    ${detail &&
    css`
      width: 151px;
      height: 234px;
      margin: 84px auto 0;
      border-radius: 5px;
    `};

    ${more &&
    css`
      width: 99px;
      height: 153px;
      border-radius: 5px;
    `};
  `};
`;

export const HasNoImage = styled.View<ImageProps>`
  ${({ theme, currently, carousel, detail, more }) => css`
    ${currently &&
    css`
      width: 91px;
      height: 136px;
      border-radius: 5px;
      margin-top: -13px;
      margin-left: 20px;
      background-color: ${theme.colors.white50};
    `};

    ${carousel &&
    css`
      width: 72px;
      height: 111px;
      border-radius: 5px;
      background-color: ${theme.colors.white50};
    `};

    ${detail &&
    css`
      width: 151px;
      height: 234px;
      margin: 84px auto 0;
      border-radius: 5px;
      background-color: ${theme.colors.white50};
    `};

    ${more &&
    css`
      width: 99px;
      height: 153px;
      border-radius: 5px;
      background-color: ${theme.colors.white50};
    `};
  `};
`;

export const Text = styled.Text<ImageProps>`
  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    margin: auto;
    transform: rotate(-40deg);
  `};
`;
