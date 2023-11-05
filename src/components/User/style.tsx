import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const User = styled.Pressable`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: row;
  padding: 0 5px;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

export const Right = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 100%;
  padding: 10px 0;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 20px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Login = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const IoniconsIcons = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.icon.secondary};
`;

export const Location = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
