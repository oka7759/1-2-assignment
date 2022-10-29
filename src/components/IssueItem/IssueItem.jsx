import React from 'react';
import styled from 'styled-components';
import formDate from '../../utils/formDate';

const List = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  padding: 0.6em 0.2em;
  font-size: 0.7rem;
`;
const LeftBox = styled.div`
  flex: 80%;
  header {
    align-items: center;
    display: flex;
    font-weight: bolder;
  }
  header,
  div {
    margin-bottom: 0.5em;
  }

  span {
    margin-right: 1em;
  }
`;

const RightBox = styled.div`
  flex: 20%;
  font-size: 0.8rem;
`;

const IssueItem = ({ number, title, user, created_at, comments }) => {
  const { login } = user;

  const date = formDate(created_at);
  return (
    <List>
      <LeftBox>
        <header>
          <span>{`#${number}`}</span>
          <h1>{title}</h1>
        </header>
        <div>
          <span>{`작성자: ${login}`}</span>
          <span>{date}</span>
        </div>
      </LeftBox>
      <RightBox>
        코멘트:
        {comments}
      </RightBox>
    </List>
  );
};

export default IssueItem;
