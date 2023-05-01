import styled from 'styled-components';
import breakpoints from '../config/breakpoints';

export const GridThumbnailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin: 10px;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
