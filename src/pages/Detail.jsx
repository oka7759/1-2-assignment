import React, { useContext } from 'react';
import { useParams } from 'react-router';
import IssueContent from '../components/issueContent/IssueContent';
import { ListContext } from '../context/ListContext';

const Detail = () => {
  const { id } = useParams();
  const { issues } = useContext(ListContext);
  const issue = issues.find(issue => issue.id === +id);
  return <IssueContent issue={issue} />;
};

export default Detail;
