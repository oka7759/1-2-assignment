import React, { useContext, useEffect, useState } from 'react';
import S from './styles';
import { ListContext } from '../../context/ListContext';
import IssueItem from '../issueItem/IssueItem';
import getIssueList from '../../utils/issueService';

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getIssueList() //
      .then(data => {
        setIssues(prev => data);
      });
  }, []);

  return (
    <S.Layout>
      <S.List>
        {issues.map(issue => (
          <IssueItem key={issue.id} {...issue} />
        ))}
      </S.List>
    </S.Layout>
  );
};

export default IssueList;
