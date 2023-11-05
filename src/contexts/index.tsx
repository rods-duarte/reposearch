import React from 'react';
import SearchContextProvider from './searchContext';
import UsersContextProvider from './usersContext';

interface Props {
  children: React.ReactNode;
}

export default function GlobalContext({ children }: Props): React.JSX.Element {
  return (
    <SearchContextProvider>
      <UsersContextProvider>{children}</UsersContextProvider>
    </SearchContextProvider>
  );
}
