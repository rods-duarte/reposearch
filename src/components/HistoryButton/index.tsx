import React from 'react';
import * as S from './style';
import { useNavigation } from '@react-navigation/native';

export default function HistoryButton(): React.JSX.Element {
  const navigation = useNavigation();

  const handlePress = (): void => {
    navigation.navigate('History');
  };

  return (
    <S.HistoryButton onPress={handlePress}>
      <S.MaterialCommunityIcons name="progress-clock" size={35} />
    </S.HistoryButton>
  );
}
