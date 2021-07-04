import styled from 'styled-components';
export const StyledFooter = styled.div`
  text-align: center;
  position: relative;
  padding: 1rem 0 1rem 0;
  display: column;
  justify-content: center;
  background-color: #e9d8a6;
  width: 100%;
  z-index: 200;

  h4 {
    font-size: 0.9rem;
  }

  li {
    text-align: left;
    font-size: 0.8rem;
    cursor: pointer;
  }
  .social-icon svg {
    padding: 0.5rem;
    color: #4f6d7a;
    width: 1.5rem;
    transition: all 0.2s linear;
  }

  .social-icon svg:hover {
    color: #d5573b;
  }

  .footer-text {
    color: #4f6d7a;
    font-weight: 400;
  }
`;
