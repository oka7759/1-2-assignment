import React, { useContext, useEffect, useRef, useState } from 'react';
import S from './styles';
import IssueItem from '../issueItem/IssueItem';
import AdBox from '../adBox/AdBox';
import useFetch from '../../hooks/useFetch';
import useObservation from '../../hooks/useObservation';
import { ListContext } from '../../context/ListContext';

const key = 'ad';

const IssueList = () => {
  const { page, setNextPage } = useContext(ListContext);
  const [isLoading, error, issues] = useFetch();
  const targetRef = useRef(null);
  const option = {
    root: null,
    rootMargin: '50px',
    threshold: 0.7,
  };
  const observationCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isLoading) {
        setNextPage();
      }
    });
  };
  useEffect(() => {
    if (!targetRef.current) return;
    const observer = new IntersectionObserver(observationCallback, option);
    observer.observe(targetRef.current);
    return () => observer.disconnect();
  });
  return (
    <S.Layout>
      <S.List>
        {Object.values(issues)
          .sort((a, b) => b.comments - a.comments)
          .map(issue => {
            return <IssueItem key={issue.id} {...issue} />;
          })}
      </S.List>
      <S.Target ref={targetRef} />
    </S.Layout>
  );
};

export default IssueList;
