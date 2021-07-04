import styled from 'styled-components';

export const StyledHeader = styled.div`
  box-sizing: border-box;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 2px 0 #00000044;
  padding: 0 2rem;
  align-items: center;
  z-index: 2;
  min-height: 3rem;
  margin-top: 4vh;

  @media screen and (min-width: 900px) {
    box-shadow: none;
    background-color: #eaeaea;
    padding-left: calc(2rem + 173.11px);
    z-index: 2;
  }

  h2 {
    @media screen and (min-width: 900px) {
      display: flex;
    }

    a {
      color: inherit;

      @media screen and (min-width: 900px) {
      }
    }
  }

  .nav-btn {
    top: 2rem;
    left: 1.5rem;
    width: 2rem;
    fill: #ee9b00;
    z-index: 2;
    cursor: pointer;
    justify-content: start;

    @media screen and (min-width: 900px) {
      display: none;
    }
  }
`;
