import React, { useContext } from 'react';
import { useParams } from 'react-router';
import IssueContent from '../components/issueContent/IssueContent';
import Loader from '../components/loader/Loader';
import { ListContext } from '../context/ListContext';
import useFetch from '../hooks/useFetch';

const Detail = () => {
  return <IssueContent />;
};

export default Detail;
