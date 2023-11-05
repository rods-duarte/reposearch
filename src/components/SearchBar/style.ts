import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

export const SearchBar = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.text.secondary,
})`
  flex: 4;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px 0 0 10px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Button = styled.Pressable<{ $active?: boolean }>`
  flex: 1;

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0 10px 10px 0;
  background-color: ${({ theme, $active }) =>
    $active ?? false ? theme.colors.tertiary : theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EntypoIcon = styled(Entypo)<{ $active?: boolean }>`
  color: ${({ theme, $active }) =>
    $active ?? false ? theme.colors.icon.primary : theme.colors.icon.secondary};
`;
