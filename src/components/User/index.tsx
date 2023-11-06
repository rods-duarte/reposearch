import * as S from './style';
import { type IUser, type UserSummary } from '../../types/searchUsers';
import useFetch from '../../hooks/useFetch';
import { useContext } from 'react';
import { UsersContext } from '../../contexts/usersContext';
import { useNavigation } from '@react-navigation/native';
import { SearchContext } from '../../contexts/searchContext';

interface Props {
  search: UserSummary | IUser;
}

export default function User({ search }: Props): React.JSX.Element {
  const abort = search?.name !== undefined;
  const { data } = useFetch<IUser>(`/users/${search.login}`, abort);
  const { setPage } = useContext(SearchContext);
  const { openUser } = useContext(UsersContext);
  const navigation = useNavigation();

  const handlePress = (): void => {
    if (abort) {
      setPage(1);
      openUser(search);
      navigation.navigate('Repos');
      return;
    }
    if (data !== undefined) {
      setPage(1);
      openUser(data);
      navigation.navigate('Repos');
    }
  };

  return (
    <S.User onPress={handlePress}>
      <S.Left>
        <S.Avatar source={{ uri: search.avatar_url }} />
        <S.Info>
          <S.Name>{search?.name ?? data?.name}</S.Name>
          <S.Login>{search.login}</S.Login>
        </S.Info>
      </S.Left>
      <S.Right>
        <S.IoniconsIcons name="location-outline" size={14} />
        <S.Location>
          {search?.location ?? data?.location ?? 'Unknown'}
        </S.Location>
      </S.Right>
    </S.User>
  );
}
