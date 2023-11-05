import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { type SearchUsers } from '../types/searchUsers';

interface PropsSearchContext {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  result: SearchUsers | undefined;
}

interface PropsSearchContextProvider {
  children: React.ReactNode;
}

const DEFAULT_VALUE = {
  query: '',
  setQuery: () => {},
  result: [],
};

export const SearchContext = createContext<PropsSearchContext>(DEFAULT_VALUE);

export default function SearchContextProvider({
  children,
}: Readonly<PropsSearchContextProvider>): React.JSX.Element {
  const [query, setQuery] = useState('');

  const { data } = useFetch<{ items: SearchUsers }>(`/search/users?q=${query}`);

  return (
    <SearchContext.Provider value={{ query, setQuery, result: data?.items }}>
      {children}
    </SearchContext.Provider>
  );
}
