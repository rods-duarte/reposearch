import * as S from './style';
import React, { useContext } from 'react';
import { UsersContext } from '../../contexts/usersContext';
import HistoryButton from '../../components/HistoryButton';
import SearchBar from '../../components/SearchBar';
import List from '../../components/List';
import { Text } from 'react-native';

export default function Repos(): React.JSX.Element {
  const { user, repos } = useContext(UsersContext);

  if (user === undefined) {
    return (
      <S.Repos>
        <Text>CARREGANDO</Text>
      </S.Repos>
    );
  }

  return (
    <S.Repos>
      <S.Top>
        <HistoryButton />
        <S.Wrapper>
          <SearchBar />
        </S.Wrapper>
      </S.Top>
      <S.User>
        <S.UserTop>
          <S.Avatar source={{ uri: user?.avatar_url }} />
          <S.Info>
            <S.Name>{user?.name}</S.Name>
            <S.Login>{user?.login}</S.Login>
          </S.Info>
        </S.UserTop>

        <S.UserBottom>
          <S.IoniconsIcons name="location-outline" size={14} />
          <S.SmallText>{user?.location}</S.SmallText>
          <S.AntDesignIcons name="user" size={14} />
          <S.SmallText $highlight>{user?.followers}</S.SmallText>
          <S.SmallText>followers</S.SmallText>
        </S.UserBottom>
      </S.User>
      <S.Title>{`${user?.public_repos} Public Repos`}</S.Title>
      <List type="repos" />
    </S.Repos>
  );
}
