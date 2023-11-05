import React from 'react';
import SearchContextProvider from './searchContext';

interface Props {
  children: React.ReactNode;
}

export default function GlobalContext({ children }: Props): React.JSX.Element {
  return <SearchContextProvider>{children}</SearchContextProvider>;
}
