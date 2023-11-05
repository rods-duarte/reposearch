import React from 'react';
import * as S from './style';
import { type IRepo } from '../../types/repos';
import dayjs from 'dayjs';
import { Linking } from 'react-native';

interface Props {
  data: IRepo;
}

export default function Repo({ data }: Props): React.JSX.Element {
  const handlePress = (): void => {
    void Linking.openURL(data?.html_url);
  };

  return (
    <S.Repo onPress={handlePress}>
      <S.Title>{data?.name}</S.Title>
      <S.Desc>{data?.description}</S.Desc>
      <S.Dates>
        <S.SmallText>
          <S.SmallText $highlight>{'created at: '}</S.SmallText>
          {dayjs(data.created_at).format('DD/MM/YYYY')}
        </S.SmallText>
        <S.SmallText>
          <S.SmallText $highlight>{'last push: '}</S.SmallText>
          {dayjs(data.pushed_at).format('DD/MM/YYYY')}
        </S.SmallText>
      </S.Dates>
      <S.Technology>
        <S.EntypoIcons name="code" size={16} />
        <S.SmallText>{data?.language ?? 'Unknown'}</S.SmallText>
      </S.Technology>
    </S.Repo>
  );
}
