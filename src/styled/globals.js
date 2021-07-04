import styled from 'styled-components';
export const Globals = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Poppins', cursive;

  h1 h2,
  h3 {
    font-size: 1rem;
    margin: 0;
    color: #005f73;
  }
  h1 {
    font-size: 1.5rem;
  }

  h4 {
    margin: 0;
    padding: 0.5rem 0 0.2rem 0;
    color: #ae2012;
  }
  p {
    text-align: left;
    color: #001219;
  }

  button {
    width: fit-content;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 400;
    padding: 0.4rem;
    align-items: center;
    color: #0a9396;
    background-color: white;
    border-radius: 0.9rem;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s linear;
  }

  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    opacity: 0.8;
  }

  .ring div div {
    border-top-color: red;
    position: relative;
    top: 100px;
    left: -20%;
  }
  @media screen and (min-width: 900px) {
    .ring div div {
      left: 30%;
    }
  }
`;
