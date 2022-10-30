import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router';
import S from './styles';
import IssueItem from '../issueItem/IssueItem';
import Layout from '../../styles/Layout';
import Loader from '../loader/Loader';
import useFetch from '../../hooks/useFetch';

const IssueContent = () => {
  const { id } = useParams();
  const [isLoading, error, issues] = useFetch();
  const issue = issues[id];
  const avatar_url = issue?.user.avatar_url;

  if (isLoading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }
  return (
    <Layout>
      <S.Header>
        <img src={avatar_url} alt="avatar" />
        <IssueItem {...issue} />
      </S.Header>
      <S.ContentBox>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue?.body}</ReactMarkdown>
      </S.ContentBox>
    </Layout>
  );
};

export default IssueContent;
