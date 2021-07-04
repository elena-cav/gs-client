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
  svg {
    width: 1rem;
  }
`;
