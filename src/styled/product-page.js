import styled from 'styled-components';
export const StyledProductPage = styled.div`
  .sliderimg {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    display: none;
  }

  .recommended-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;

    @media screen and (min-width: 900px) {
      width: 30%;
    }
  }
  .gallery {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;
    @media screen and (min-width: 900px) {
      justify-content: center;
      flex-flow: row wrap;
      column-gap: 1rem;
    }
    img {
      max-width: 100%;
      height: auto;
      vertical-align: bottom;
    }
  }
`;
