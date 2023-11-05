import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { type SearchUsers } from '../types/searchUsers';

interface PropsSearchContext {
  // users: SearchUsers;
  // setUsers: React.Dispatch<React.SetStateAction<SearchUsers>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  result: SearchUsers | undefined;
}

interface PropsSearchContextProvider {
  children: React.ReactNode;
}

const DEFAULT_VALUE = {
  // users: [],
  // setUsers: () => {},
  query: '',
  setQuery: () => {},
  result: [],
};

export const SearchContext = createContext<PropsSearchContext>(DEFAULT_VALUE);

export default function SearchContextProvider({
  children,
}: PropsSearchContextProvider): React.JSX.Element {
  // const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');

  const { data } = useFetch<SearchUsers>(`/search/users?q=${query}`);

  return (
    <SearchContext.Provider value={{ query, setQuery, result: data }}>
      {children}
    </SearchContext.Provider>
  );
}
