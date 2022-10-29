import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import IssueItem from '../issueItem/IssueItem';
import Layout from '../../styles/Layout';

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 10%;
    margin-right: 0.5em;
  }
  li {
    flex: 90%;
  }
`;

const IssueContent = ({ issue }) => {
  const avatar_url = issue && issue.user.avatar_url;
  return (
    <Layout>
      <Header>
        <img src={avatar_url} alt="avatar" />
        <IssueItem {...issue} />
      </Header>
      <main>
        {issue && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown>
        )}
      </main>
    </Layout>
  );
};

export default IssueContent;
