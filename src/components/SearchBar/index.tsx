import React, { useContext, useState } from 'react';
import * as S from './style';
import { SearchContext } from '../../contexts/searchContext';
import { useNavigation } from '@react-navigation/native';

export default function SearchBar(): React.JSX.Element {
  const [textField, onChangeTextField] = useState<string>('');
  const buttonEnabled = textField.length > 0;
  const navigation = useNavigation();

  const { setQuery } = useContext(SearchContext);

  const handlePress = (): void => {
    setQuery(textField);
    navigation.navigate('Results');
  };

  return (
    <S.SearchBar>
      <S.Input
        placeholder="Search for user..."
        value={textField}
        onChangeText={onChangeTextField}
      />
      <S.Button onPress={handlePress} $active={buttonEnabled}>
        <S.EntypoIcon
          name="magnifying-glass"
          size={32}
          $active={buttonEnabled}
        />
      </S.Button>
    </S.SearchBar>
  );
}
