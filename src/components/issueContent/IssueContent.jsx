import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import S from './styles';
import IssueItem from '../issueItem/IssueItem';
import Layout from '../../styles/Layout';

const IssueContent = ({ issue }) => {
  const avatar_url = issue && issue.user.avatar_url;
  return (
    <Layout>
      <S.Header>
        <img src={avatar_url} alt="avatar" />
        <IssueItem {...issue} />
      </S.Header>
      <main>
        {issue && (
          // eslint-disable-next-line react/no-children-prop
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown>
        )}
      </main>
    </Layout>
  );
};

export default IssueContent;
