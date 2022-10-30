import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  img {
    border-radius: 0.5em;
    width: 10%;
    margin-right: 0.5em;
  }
  li {
    flex: 90%;
  }
`;

const ContentBox = styled.main`
  display: flex;
  flex-direction: column;
`;

const S = { Header, ContentBox };
export default S;
