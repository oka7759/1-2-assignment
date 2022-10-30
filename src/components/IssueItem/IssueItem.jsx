import React from 'react';
import { useNavigate, useParams } from 'react-router';
import formDate from '../../utils/formDate';
import S from './styles';

const IssueItem = ({ id, number, title, user, created_at, comments }) => {
  const navigate = useNavigate();
  const params = useParams();
  const date = formDate(created_at);
  const handleClick = () => {
    if (!params.id) {
      navigate(`/issue/${id}`);
    }
  };
  return (
    <S.List onClick={handleClick} params={!!params.id}>
      <S.LeftBox>
        <header>
          <span>{`#${number}`}</span>
          <h1>{title}</h1>
        </header>
        <div>
          <span>{`작성자: ${user && user.login}`}</span>
          <span>{date}</span>
        </div>
      </S.LeftBox>
      <S.RightBox>
        코멘트:
        {comments}
      </S.RightBox>
    </S.List>
  );
};

export default IssueItem;
