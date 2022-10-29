import { useContext, useState, useEffect } from 'react';
import { ListContext } from '../context/ListContext';
import getIssueList from '../utils/issueService';

const useFetch = () => {
  const { issues, setIssues, page } = useContext(ListContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    setIsLoading(true);
    getIssueList(page) //
      .then(data => {
        setIssues(prev => {
          const updated = { ...prev };
          data.forEach(issue => {
            updated[issue.id] = issue;
          });
          return updated;
        });
      })
      .catch(e => setError(e))
      .finally(() => setIsLoading(false));
  }, [page]);

  return [isLoading, error, issues];
};

export default useFetch;
