import React, { useContext, useRef } from 'react';
import { type ScrollView } from 'react-native';

import User from '../User';
import Repo from '../Repo';

import { SearchContext } from '../../contexts/searchContext';
import { UsersContext } from '../../contexts/usersContext';
import * as S from './style';

interface Props {
  type: 'users' | 'repos';
}

export default function List({ type }: Props): React.JSX.Element {
  const scroll = useRef<ScrollView>(null);
  const { result, setPage: setUsersPage } = useContext(SearchContext);
  const { repos, setPage: setReposPage } = useContext(UsersContext);

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

  const handlePress = (): void => {
    scroll.current?.scrollToEnd();
    if (type === 'users') setUsersPage((prevPage) => prevPage + 1);
    if (type === 'repos') setReposPage((prevPage) => prevPage + 1);
  };

  return (
    <S.Wrapper>
      <S.List ref={scroll}>{renderContent()}</S.List>
      <S.NextPage onPress={handlePress}>
        <S.AntDesignIcons name="arrowdown" size={24} />
      </S.NextPage>
    </S.Wrapper>
  );
}
