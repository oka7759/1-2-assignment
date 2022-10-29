import styled from 'styled-components';

const List = styled.li`
  height: 10%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  padding: 1em 0.2em;
  font-size: 0.8rem;
  cursor: ${props => (props.params ? 'initial' : 'pointer')};
`;
const LeftBox = styled.div`
  flex: 85%;
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
  flex: 15%;
  font-size: 0.9rem;
  text-align: end;
`;

const S = {
  List,
  LeftBox,
  RightBox,
};

export default S;
