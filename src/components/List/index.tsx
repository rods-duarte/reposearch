import React, { useContext } from 'react';
import User from '../User';
import { SearchContext } from '../../contexts/searchContext';
import * as S from './style';
import { UsersContext } from '../../contexts/usersContext';
import Repo from '../Repo';

interface Props {
  type: 'users' | 'repos';
}

export default function List({ type }: Props): React.JSX.Element {
  const { result } = useContext(SearchContext);
  const { repos } = useContext(UsersContext);

  const renderContent = (): React.JSX.Element[] | null => {
    if (type === 'users' && result != null) {
      return result.map((element) => (
        <User search={element} key={element.id} />
      ));
    } else if (type === 'repos' && repos !== null) {
      return repos.map((element) => <Repo data={element} key={element.id} />);
    }
    return null;
  };
  return (
    <S.Wrapper>
      <S.List>{renderContent()}</S.List>
    </S.Wrapper>
  );
}
