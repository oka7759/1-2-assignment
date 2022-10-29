import React from 'react';
import { ListContextProvider } from './context/ListContext';
import Router from './Router';
import getIssueList from './utils/issueService';

const App = () => {
  return (
    <ListContextProvider>
      <Router />
    </ListContextProvider>
  );
};

export default App;
