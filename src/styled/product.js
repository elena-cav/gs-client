import styled from 'styled-components';
export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .product-img {
    width: 50%;
    height: 25vh;
    object-fit: cover;
  }
  .product-img-container {
    display: flex;
    margin: 5px;
  }
`;
