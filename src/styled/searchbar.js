import styled from 'styled-components';
export const StyledBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  form {
    background-color: white;
    height: 6vh;
    width: 100%;
    z-index: 999;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    top: 0;
    left: 0;
    animation-name: search-animation;
    animation-duration: 1s;
    box-shadow: 0 0 7px #00000044;
  }

  input {
    height: 3vh;
    padding: 0.2rem;
  }

  .search-icon {
    width: 1.3rem;
    color: #005f73;
    z-index: 2;
    cursor: pointer;
  }
  @keyframes search-animation {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(0);
    }
  }
`;
