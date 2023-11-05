import styled from 'styled-components/native';

export const Home = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  padding: 0 20px;
`;

export const HistoryButton = styled.View`
  position: absolute;
  top: 30px;
  left: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 40px;
`;
