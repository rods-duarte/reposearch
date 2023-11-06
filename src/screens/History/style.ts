import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';

export const History = styled.View`
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
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Loading = styled.View`
  flex: 1;
  width: 100%;
`;

export const HomeButton = styled.Pressable``;

export const FontAwesome5Icons = styled(FontAwesome5)`
  color: ${({ theme }) => theme.colors.icon.primary};
`;
