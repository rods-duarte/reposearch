import React from 'react';
import * as S from './style';

export default function HistoryButton(): React.JSX.Element {
  return (
    <S.HistoryButton>
      <S.MaterialCommunityIcons name="progress-clock" size={35} />
    </S.HistoryButton>
  );
}
