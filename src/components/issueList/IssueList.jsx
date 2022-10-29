import React, { useContext } from 'react';
import S from './styles';
import { ListContext } from '../../context/ListContext';
import IssueItem from '../IssueItem/IssueItem';

const IssueList = () => {
  const { issues } = useContext(ListContext);

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
