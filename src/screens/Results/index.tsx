import React, { useContext } from 'react';
import * as S from './style';
import List from '../../components/List';
import { SearchContext } from '../../contexts/searchContext';
import HistoryButton from '../../components/HistoryButton';
import SearchBar from '../../components/SearchBar';

export default function Results(): React.JSX.Element {
  const { result } = useContext(SearchContext);

  return (
    <S.Results>
      <S.Top>
        <HistoryButton />
        <S.Wrapper>
          <SearchBar />
        </S.Wrapper>
      </S.Top>
      <S.Title>{`Found ${result?.length} results`}</S.Title>
      <List />
    </S.Results>
  );
}
