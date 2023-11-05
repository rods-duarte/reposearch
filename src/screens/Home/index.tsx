import SearchBar from '../../components/SearchBar';
import * as S from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home(): React.JSX.Element {
  return (
    <S.Home>
      <S.HistoryButton>
        <MaterialCommunityIcons
          name="progress-clock"
          size={35}
          color="#F5F5F5"
        />
      </S.HistoryButton>
      <S.Title>RepoSearch</S.Title>
      <SearchBar />
    </S.Home>
  );
}
