import React, { createContext, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { type SearchUsers } from '../types/searchUsers';

interface PropsSearchContext {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  result: SearchUsers | undefined;
  total: number | undefined;
}

interface PropsSearchContextProvider {
  children: React.ReactNode;
}

const DEFAULT_VALUE = {
  query: '',
  setQuery: () => {},
  page: 1,
  setPage: () => {},
  result: [],
  total: 0,
};

export const SearchContext = createContext<PropsSearchContext>(DEFAULT_VALUE);

export default function SearchContextProvider({
  children,
}: Readonly<PropsSearchContextProvider>): React.JSX.Element {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [allResults, setAllResults] = useState<SearchUsers>([]);

  const { data } = useFetch<{ items: SearchUsers; total_count: number }>(
    `/search/users?q=${query}&page=${page}`,
  );

  useEffect(() => {
    if (data?.items != null) {
      setAllResults((prevResults) => [...prevResults, ...data.items]);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
    setAllResults([]);
  }, [query]);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        result: allResults,
        total: data?.total_count,
        page,
        setPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
