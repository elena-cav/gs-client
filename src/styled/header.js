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
  height: 50px;
  margin-top: 35px;

  @media screen and (min-width: 900px) {
    box-shadow: none;
    background-color: #eaeaea;
    justify-content: center;
  }

  .cart-icon {
    width: 1.3rem;
    color: #005f73;
    z-index: 2;
    cursor: pointer;
    position: absolute;
    right: 4.5rem;

    @media screen and (min-width: 900px) {
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .count {
    color: #005f73;
    z-index: 2;
    position: absolute;
    right: 3.3rem;
    font-size: 0.8rem;

    @media screen and (min-width: 900px) {
      top: 50%;
      transform: translateY(-100%);
    }
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
