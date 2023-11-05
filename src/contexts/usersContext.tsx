import React, { createContext, useState } from 'react';
import { type IUser } from '../types/searchUsers';
import useFetch from '../hooks/useFetch';
import { type Repos } from '../types/repos';

interface PropsUsersContext {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  repos: Repos;
  history: IUser[];
  openUser: (p: IUser) => void;
}

interface PropsUsersContextProvider {
  children: React.ReactNode;
}

const DEFAULT_VALUE = {
  user: undefined,
  setUser: () => {},
  repos: [],
  history: [],
  openUser: () => {},
};

export const UsersContext = createContext<PropsUsersContext>(DEFAULT_VALUE);

export default function UsersContextProvider({
  children,
}: Readonly<PropsUsersContextProvider>): React.JSX.Element {
  const [user, setUser] = useState<IUser>();
  const history: IUser[] = [];

  const { data } = useFetch<Repos>(`/users/${user?.login}/repos`);

  const openUser = (user: IUser): void => {
    setUser(user);
    history.push(user);
  };

  return (
    <UsersContext.Provider value={{ user, repos: data, history, openUser }}>
      {children}
    </UsersContext.Provider>
  );
}
