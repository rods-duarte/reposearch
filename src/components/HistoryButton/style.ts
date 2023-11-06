import styled from 'styled-components/native';
import { MaterialCommunityIcons as MaterialCommunity } from '@expo/vector-icons';

export const HistoryButton = styled.Pressable``;

export const MaterialCommunityIcons = styled(MaterialCommunity)`
  color: ${({ theme }) => theme.colors.icon.primary};
`;
