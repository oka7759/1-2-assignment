import React from 'react';
import { useParams } from 'react-router';
import IssueContent from '../components/issueContent/IssueContent';

const Detail = ({ issues }) => {
  const { id } = useParams();
  const issue = issues.find(issue => issue.id === +id);
  return <IssueContent issue={issue} />;
};

export default Detail;
