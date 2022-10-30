import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import S from './styles';
import IssueItem from '../issueItem/IssueItem';
import AdBox from '../adBox/AdBox';
import useFetch from '../../hooks/useFetch';
import useObservation from '../../hooks/useObservation';
import { ListContext } from '../../context/ListContext';

import Loader from '../loader/Loader';
import ErrorContent from '../errorContent/ErrorContent';

const IssueList = () => {
  const { setNextPage } = useContext(ListContext);
  const navigate = useNavigate();
  const [isLoading, error, issues] = useFetch();
  const targetRef = useRef(null);
  const option = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };
  const observationCallback = entries => {
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

  if (error) {
    return (
      <S.Layout>
        <ErrorContent text={error} />
      </S.Layout>
    );
  }
  return (
    <S.Layout>
      <S.List>
        {Object.values(issues)
          .sort((a, b) => b.comments - a.comments)
          .map((issue, idx) => {
            if (idx === 4) {
              return (
                <>
                  <AdBox />
                  <IssueItem key={issue.id} {...issue} />
                </>
              );
            }
            return <IssueItem key={issue.id} {...issue} />;
          })}
        {isLoading && <Loader />}
      </S.List>

      <S.Target ref={targetRef} />
    </S.Layout>
  );
};

export default IssueList;
