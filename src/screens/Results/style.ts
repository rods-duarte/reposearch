import styled from 'styled-components/native';

export const Results = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  padding: 0 20px;
  padding-top: 30px;
`;

export const Top = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Wrapper = styled.View`
  width: 85%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
