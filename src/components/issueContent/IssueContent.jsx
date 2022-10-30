import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router';
import S from './styles';
import IssueItem from '../issueItem/IssueItem';
import Layout from '../../styles/Layout';
import Loader from '../loader/Loader';
import useFetch from '../../hooks/useFetch';
import ErrorContent from '../errorContent/ErrorContent';
import markdownSetting from '../../utils/markdownSetting';

const IssueContent = () => {
  const { id } = useParams();
  const [isLoading, error, issues] = useFetch();
  const issue = issues[id];
  const avatar_url = issue?.user.avatar_url;
  if (!issue) {
    return <ErrorContent />;
  }
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
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownSetting}>
          {issue?.body
            .replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n')
            .replace(/\*\*/gi, '@$_%!^')
            .replace(/@\$_%!\^/gi, '**')
            .replace(/<\/?u>/gi, '*')}
        </ReactMarkdown>
      </S.ContentBox>
    </Layout>
  );
};

export default IssueContent;
