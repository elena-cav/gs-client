import styled from 'styled-components';
export const StyledChat = styled.div`
  width: 100%;

  h1 {
    color: white;
    font-weight: 400;
  }

  a {
    position: relative;
    display: inline-block;
    font-size: 2em;
    font-weight: 800;
    color: #0a9396;
    overflow: hidden;
    background: linear-gradient(to right, #0a9396, #001219 50%, #0a9396 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
  }

  a:hover {
    background-position: 0 100%;
  }
  .chat-icon {
    width: 50px;
    float: right;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 800;
    color: #ee9b00;
    cursor: pointer;
    &:hover {
      color: #ae2012;
      transition: all 0.3s linear;
    }

    svg {
      width: 1em;
      height: 1em;
      color: #001219;
    }
  }
  .chat-box {
    border: solid;
    height: 50vh;
    position: fixed;
    bottom: 6rem;
    right: 3rem;
    z-index: 999;
    width: 50%;
    border-radius: 0.7rem;
    background-color: white;
    transition: all 0.3s linear;
    overflow: hidden;
  }
  .conversation-box {
    text-align: center;
    padding: 1rem;
  }

  .chat-inner-box {
    padding: 1rem;

    margin: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15vh;
    row-gap: 0.5em;
    margin-bottom: 2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 15px 0px,
      rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, #0a9396 0px 2px 0px 0px inset;
  }

  .hello-box {
    padding-top: 0.5rem;
    background-color: #0a9396;
    height: 10vh;
    display: flex;
    flex-direction: column;

    h3,
    h4 {
      color: white;
      padding: 0 1rem 0 1rem;
    }
  }
  button {
    cursor: pointer;
  }
  p {
    text-align: center;
    font-weight: 400;
  }
`;
