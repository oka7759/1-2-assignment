import { useEffect, useMemo, useState, createContext } from 'react';
import getIssueList from '../utils/issueService';

export const ListContext = createContext();
export const ListContextProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const newIssueList = getIssueList(page);
    setIssues(newIssueList);
  }, []);
  const value = useMemo(() => ({ issues, setIssues }), []);
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};
