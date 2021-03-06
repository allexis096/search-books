import styled, { css } from 'styled-components/native';

type CardViewProps = {
  color: string[];
};

export const CardView = styled.TouchableOpacity<CardViewProps>`
  ${({ theme, color }) => css`
    width: 272px;
    height: 139px;
    background-color: ${color[Math.floor(Math.random() * color.length)]};
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px 13px;
    border-radius: 5px;
    position: relative;
  `};
`;

export const TextCardView = styled.View`
  ${({ theme }) => css``};
`;

export const TextCardTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white75};
    font-family: ${theme.font.playFairBold};
    font-size: 16px;
    max-width: 150px;
  `};
`;

export const TextCardPublisher = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white125};
    font-size: 14px;
    font-style: italic;
    margin-top: 5px;
    max-width: 150px;
  `};
`;

export const CardLengthView = styled.View`
  ${({ theme }) => css`
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
  `};
`;

export const TextCardBookLength = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white125};
    font-size: 10px;
  `};
`;
