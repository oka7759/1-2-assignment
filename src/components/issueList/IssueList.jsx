import React, { useContext, useEffect, useState } from 'react';
import S from './styles';
import { ListContext } from '../../context/ListContext';
import IssueItem from '../issueItem/IssueItem';
import getIssueList from '../../utils/issueService';
import AdBox from '../adBox/AdBox';

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setpage] = useState(1);
  useEffect(() => {
    getIssueList() //
      .then(data => {
        setIssues(prev => data);
      });
  }, []);

  return (
    <S.Layout>
      <S.List>
        {issues.map((issue, idx) => {
          if (page === 1 && idx === 4) {
            return (
              <>
                <AdBox key="ad" />
                <IssueItem key={issue.id} {...issue} />
              </>
            );
          }
          return <IssueItem key={issue.id} {...issue} />;
        })}
      </S.List>
    </S.Layout>
  );
};

export default IssueList;
