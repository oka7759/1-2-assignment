import React, { useContext, useEffect, useState } from 'react';
import IssueList from '../components/issueList/IssueList';

const Home = ({ issues }) => {
  return <IssueList issues={issues} />;
};

export default Home;
