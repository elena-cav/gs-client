import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  padding: 2rem;
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
