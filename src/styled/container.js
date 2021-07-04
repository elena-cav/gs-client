import styled from 'styled-components';

export const Container = styled.div`
  padding: 9rem 2rem 2rem 2rem;
  flex-grow: 1;
  box-sizing: border-box;
  height: auto;
  min-height: 100vh;
  text-align: center;
  font-weight: 400;
  margin: 0;
  position: relative;

  @media screen and (min-width: 900px) {
    padding-left: 210px;
  }
`;
