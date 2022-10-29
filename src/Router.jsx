import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './components/header/Header';
import getIssueList from './utils/issueService';

const Router = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setpage] = useState(1);
  useEffect(() => {
    getIssueList() //
      .then(data => {
        setIssues(prev => data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home issues={issues} page={page} />} />
        <Route path="/:id" element={<Detail issues={issues} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
