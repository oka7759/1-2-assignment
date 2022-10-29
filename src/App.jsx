import React from 'react';
import { ListContextProvider } from './context/ListContext';
import Router from './Router';

const App = () => {
  return (
    <ListContextProvider>
      <Router />
    </ListContextProvider>
  );
};

export default App;
