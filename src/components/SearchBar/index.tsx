import React, { useContext, useState } from 'react';
import * as S from './style';
import { SearchContext } from '../../contexts/searchContext';
import { useNavigation } from '@react-navigation/native';
import { UsersContext } from '../../contexts/usersContext';

export default function SearchBar(): React.JSX.Element {
  const [textField, setTextField] = useState<string>('');
  const buttonEnabled = textField.length > 0;
  const navigation = useNavigation();

  const { setQuery } = useContext(SearchContext);
  const { setPage } = useContext(UsersContext);

  const handlePress = (): void => {
    setPage(1);
    setQuery(textField);
    setTextField('');
    navigation.navigate('Results');
  };

  return (
    <S.SearchBar>
      <S.Input
        placeholder="Search for user..."
        value={textField}
        onChangeText={setTextField}
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
