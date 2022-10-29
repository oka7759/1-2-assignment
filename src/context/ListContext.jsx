import { useMemo, useState, createContext } from 'react';

export const ListContext = createContext();
export const ListContextProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const value = useMemo(() => ({ issues, setIssues }), []);
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};
