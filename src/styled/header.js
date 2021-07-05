import styled from 'styled-components';

export const StyledHeader = styled.div`
  box-sizing: border-box;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 2px 0 #00000044;
  padding: 0 2rem;
  align-items: center;
  z-index: 2;
  min-height: 7vh;
  margin-top: 4vh;

  @media screen and (min-width: 900px) {
    box-shadow: none;
    background-color: #eaeaea;
    justify-content: center;
  }

  h2 {
    font-weight: 400;
    margin: 0;
    color: #005f73;
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

    @media screen and (min-width: 900px) {
      display: none;
    }
  }
`;
