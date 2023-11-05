import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

export const Repo = styled.Pressable`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: flex-start;
  row-gap: 5px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Desc = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Dates = styled.View``;

export const SmallText = styled.Text<{ $highlight?: boolean }>`
  font-size: 12px;
  color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.text.primary : theme.colors.text.secondary};
  font-family: ${({ theme, $highlight }) =>
    $highlight ? theme.fonts.bold : theme.fonts.regular};
`;

export const Technology = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  column-gap: 5px;
`;

export const EntypoIcons = styled(Entypo)`
  color: ${({ theme }) => theme.colors.icon.tertiary};
`;
