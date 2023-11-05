import styled from 'styled-components/native';
import { MaterialCommunityIcons as MaterialCommunity } from '@expo/vector-icons';

export const HistoryButton = styled.View``;

export const MaterialCommunityIcons = styled(MaterialCommunity)`
  color: ${({ theme }) => theme.colors.icon.primary};
`;
