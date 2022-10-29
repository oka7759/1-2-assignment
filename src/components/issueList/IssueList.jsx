import React, { useContext, useEffect, useState } from 'react';
import S from './styles';
import IssueItem from '../issueItem/IssueItem';
import AdBox from '../adBox/AdBox';
import useFetch from '../../hooks/useFetch';

const IssueList = () => {
  const [page, setPage] = useState(1);
  const [isLoading, error, issues] = useFetch(page);
  const observerOption = {
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
  };
  const observationCallback = () => {};
  const observer = new IntersectionObserver(
    observationCallback,
    observerOption
  );

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
