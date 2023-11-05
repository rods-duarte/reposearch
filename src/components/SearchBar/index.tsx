import React, { useState } from 'react';
import * as S from './style';

export default function SearchBar(): React.JSX.Element {
  const [textField, onChangeTextField] = useState<string>('');
  const buttonEnabled = textField.length > 0;

  const handlePress = (): void => {};

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
