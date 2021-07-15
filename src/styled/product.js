import styled from 'styled-components';
export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;

  .product-img {
    width: 300px;
    height: 25vh;
    object-fit: cover;
  }
  .product-img-container {
    display: flex;
    margin: 5px;
  }

  .bookmark-solid {
    float: right;
    padding-right: 0.5rem;
    color: #ee9b00;
    cursor: pointer;
    width: 1rem;
    transition: all 0.2s linear;
  }
  .bookmark {
    float: right;
    padding-right: 0.5rem;
    color: #ee9b00;
    cursor: pointer;
    width: 1rem;
    transition: all 0.2s linear;
  }
  .card-text {
    text-align: left;
    padding-left: 0.5rem;
  }
  h4 {
    text-align: left;
    margin: 0;
    padding: 0 0 0 0.5rem;
  }
  button {
    align-self: end;
    transform: translateY(-70%);
    cursor: pointer;
  }
`;
