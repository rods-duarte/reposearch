import styled from 'styled-components/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export const Repos = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

export const User = styled.View`
  width: 100%;
  row-gap: 5px;
`;

export const UserTop = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 10px;
`;

export const UserBottom = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  column-gap: 2px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 40px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Login = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const IoniconsIcons = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.icon.secondary};
`;

export const AntDesignIcons = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.icon.secondary};
`;

export const SmallText = styled.Text<{ $highlight?: boolean }>`
  font-size: ${({ $highlight }) => ($highlight ? '12px' : '10px')};
  color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.text.primary : theme.colors.text.secondary};
  font-family: ${({ theme, $highlight }) =>
    $highlight ? theme.fonts.bold : theme.fonts.regular};
`;
