import React, { useContext } from 'react';
import * as S from './style';
import List from '../../components/List';
import { SearchContext } from '../../contexts/searchContext';
import HistoryButton from '../../components/HistoryButton';
import SearchBar from '../../components/SearchBar';

export default function Results(): React.JSX.Element {
  const { result, total } = useContext(SearchContext);

  const listBuilder = (): React.JSX.Element | null => {
    if (result !== undefined) {
      return (
        <>
          <S.Title>{`Found ${total} results`}</S.Title>
          <List type="users" />
        </>
      );
    }
    return <S.Loading />;
  };

  return (
    <S.Results>
      <S.Top>
        <HistoryButton />
        <S.Wrapper>
          <SearchBar />
        </S.Wrapper>
      </S.Top>
      {listBuilder()}
    </S.Results>
  );
}
