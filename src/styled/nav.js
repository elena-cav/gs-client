import styled from 'styled-components';

export const StyledNavBar = styled.div`
  position: relative;
  .nav-close {
    color: #005f73;
    cursor: pointer;

    svg {
      width: 1rem;
      margin-top: 1rem;
    }
  }
  .navbar {
    box-sizing: border-box;
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background: #fff;
    z-index: 100;
    padding: 1rem 0;
    font-size: 1.3rem;
    text-align: left;
    padding-left: 1rem;
    transform: translateX(-120%);
    transition: transform 0.2s ease-in-out;
    box-shadow: 0 0 7px #00000044;
    h4 {
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
    }

    &--open {
      transform: translateX(0);
    }
    @media screen and (min-width: 900px) {
      transform: translateX(0);
      box-shadow: none;
      display: flex;
      margin-top: 5rem;
      width: 100%;
      flex-direction: row;
      height: 8vh;
      justify-content: center;
      align-items: center;
      h4 {
        display: inline;
        padding: 0 3rem 0 3rem;
      }
    }
  }

  .nav-items {
    padding: 0;
    margin: 0 0 3rem 0;

    svg {
      width: 1em;
      height: 1em;
      color: #005f73;
    }

    a {
      /* display: block; */
      color: #0a9396;
      text-transform: uppercase;
      padding: 0.5rem 2rem;
    }
  }
  @media screen and (min-width: 900px) {
    .nav-btn,
    .nav-close {
      display: none;
    }
  }
`;
