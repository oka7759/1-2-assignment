import { useMemo, useState, createContext } from 'react';

export const ListContext = createContext();
export const ListContextProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const incrementPage = () => {
    setPage(prev => prev + 1);
  };
  const decrementPage = () => {
    setPage(prev => prev - 1);
  };

  const value = useMemo(
    () => ({ issues, setIssues, incrementPage, decrementPage }),
    []
  );
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};
