import React, { createContext, useEffect, useState } from 'react';
import { type IUser } from '../types/searchUsers';
import useFetch from '../hooks/useFetch';
import { type Repos } from '../types/repos';

interface PropsUsersContext {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  repos: Repos;
  history: IUser[];
  openUser: (p: IUser) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  clearData: () => void;
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
  page: 1,
  setPage: () => {},
  clearData: () => {},
};

export const UsersContext = createContext<PropsUsersContext>(DEFAULT_VALUE);

export default function UsersContextProvider({
  children,
}: Readonly<PropsUsersContextProvider>): React.JSX.Element {
  const [user, setUser] = useState<IUser>();
  const [page, setPage] = useState<number>(1);
  const [allRepos, setAllRepos] = useState<Repos>([]);
  const history: IUser[] = [];

  const { data } = useFetch<Repos>(`/users/${user?.login}/repos?page=${page}`);

  const openUser = (user: IUser): void => {
    setUser(user);
    history.push(user);
  };

  useEffect(() => {
    if (data != null) {
      setAllRepos([...allRepos, ...data]);
    }
  }, [data]);

  useEffect(() => {
    setAllRepos([]);
  }, [user]);

  return (
    <UsersContext.Provider
      value={{
        user,
        repos: allRepos,
        history,
        openUser,
        page,
        setPage,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
