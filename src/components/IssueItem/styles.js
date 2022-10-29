import styled from 'styled-components';

const List = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  padding: 0.6em 0.2em;
  font-size: 0.7rem;
  cursor: pointer;
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

const S = {
  List,
  LeftBox,
  RightBox,
};

export default S;
