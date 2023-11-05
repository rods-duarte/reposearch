import React, { useContext } from 'react';
import User from '../User';
import { SearchContext } from '../../contexts/searchContext';
import * as S from './style';

export default function List(): React.JSX.Element {
  const { result } = useContext(SearchContext);

  return (
    <S.Wrapper>
      <S.List>
        {result?.map((element) => <User search={element} key={element.id} />)}
      </S.List>
    </S.Wrapper>
  );
}
