import styled from 'styled-components';
export const StyledBar = styled.div`
  display: flex;
  flex-direction: column;

  form {
    background-color: white;
    height: 12vh;
    width: 100%;
    z-index: 999;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    top: 0;
    left: 0;
    animation-duration: 1s;
    box-shadow: 0 0 7px #00000044;
    transform: translateY(-100%);
    transition: transform 0.2s ease-in-out;
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

    @media screen and (min-width: 900px) {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .search-form-enter {
    transform: translateY(-100%);
  }
  .search-form-enter-done {
    transform: translateY(0%);
  }

  .search-form-enter-active {
    transform: translateY(0);
  }

  .search-form-leave {
    transform: translateY(0);
  }

  .search-form-leave-active {
    transform: translateY(-100%);
  }

  .close-btn {
    position: absolute;
    width: 1.2rem;
    top: 10px;
    right: 10px;
    color: red;
    cursor: pointer;
  }
`;
