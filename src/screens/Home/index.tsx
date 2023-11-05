import SearchBar from '../../components/SearchBar';
import HistoryButton from '../../components/HistoryButton';
import * as S from './style';

export default function Home(): React.JSX.Element {
  return (
    <S.Home>
      <S.Top>
        <HistoryButton />
      </S.Top>
      <S.Title>RepoSearch</S.Title>
      <SearchBar />
    </S.Home>
  );
}
