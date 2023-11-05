import * as S from './style';
import { type IUser, type UserSummary } from '../../types/searchUsers';
import useFetch from '../../hooks/useFetch';

interface Props {
  search: UserSummary;
}

export default function User({ search }: Props): React.JSX.Element {
  const { data } = useFetch<IUser>(`/users/${search.login}`);

  return (
    <S.User>
      <S.Left>
        <S.Avatar source={{ uri: search.avatar_url }} />
        <S.Info>
          <S.Name>{data?.name}</S.Name>
          <S.Login>{search.login}</S.Login>
        </S.Info>
      </S.Left>
      <S.Right>
        <S.IoniconsIcons name="location-outline" size={14} color="black" />
        <S.Location>{data?.location}</S.Location>
      </S.Right>
    </S.User>
  );
}
