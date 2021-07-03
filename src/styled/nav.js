import styled from 'styled-components';

export const StyledNavBar = styled.div`
  position: relative;

  .nav-close {
    color: #001219;
    cursor: pointer;

    svg {
      width: 1.5rem;
      padding: 0.5rem 2rem;
    }
  }
  .navbar {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background: #fff;
    z-index: 999;
    padding: 1rem 0;
    font-size: 1.3rem;
    text-align: left;
    transform: translateX(-120%);
    transition: transform 0.2s ease-in-out;
    box-shadow: 0 0 7px #00000044;

    &--open {
      transform: translateX(0);
    }
    @media screen and (min-width: 900px) {
      transform: translateX(0);
      box-shadow: none;
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
      display: block;
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

  .post {
    font-size: 1rem;
    box-shadow: 0 0 7px #00000044;
    margin: 0.5rem 2rem;
    padding: 0.5rem;
    text-align: center;
  }

  /* .post a {
    color: #4f6d7a;
    text-transform: uppercase;
  } */
`;
