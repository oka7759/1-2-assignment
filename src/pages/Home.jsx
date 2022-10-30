import React from 'react';
import IssueList from '../components/issueList/IssueList';

const Home = ({ issues }) => {
  return <IssueList issues={issues} />;
};

export default Home;
