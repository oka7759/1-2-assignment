import { useContext, useState, useEffect } from 'react';
import { ListContext } from '../context/ListContext';
import getIssueList from '../utils/issueService';

const useFetch = page => {
  const { issues, setIssues } = useContext(ListContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    setIsLoading(true);
    getIssueList(page) //
      .then(data => {
        setIssues(data);
      })
      .catch(e => setError(e))
      .finally(() => setIsLoading(false));
  }, [page]);
  return [isLoading, error, issues];
};

export default useFetch;
