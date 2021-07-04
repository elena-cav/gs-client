import styled from 'styled-components';
export const StyledChat = styled.div`
  width: 100%;
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
    z-index: 9;
    width: 50%;
    border-radius: 0.7rem;
    background-color: white;
    transition: all 0.3s linear;
    /* padding: 2rem; */
  }
  .conversation-box {
    padding: 1rem;
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
`;
