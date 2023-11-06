import React, { useContext } from 'react';
import * as S from './style';
import List from '../../components/List';
import SearchBar from '../../components/SearchBar';
import { UsersContext } from '../../contexts/usersContext';
import { useNavigation } from '@react-navigation/native';

export default function History(): React.JSX.Element {
  const { history } = useContext(UsersContext);
  const navigation = useNavigation();

  const listBuilder = (): React.JSX.Element | null => {
    if (history.length !== 0) {
      return (
        <>
          <S.Title>{`History`}</S.Title>
          <List type="history" />
        </>
      );
    }
    return <S.Loading />;
  };

  const handlePress = (): void => {
    navigation.navigate('Home');
  };

  return (
    <S.History>
      <S.Top>
        <S.HomeButton onPress={handlePress}>
          <S.FontAwesome5Icons name="home" size={35} />
        </S.HomeButton>
        <S.Wrapper>
          <SearchBar />
        </S.Wrapper>
      </S.Top>
      {listBuilder()}
    </S.History>
  );
}
