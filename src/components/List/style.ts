import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;

export const List = styled.ScrollView``;

export const NextPage = styled.Pressable`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  margin-bottom: 10px;
`;

export const AntDesignIcons = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.icon.primary};
`;
